const idOfUrl = (url) => `${url}`.match(/(\d+)$/)?.[1]
const idOf = (entry) => idOfUrl(entry?._links?.self?.href)

const CachedBrand = async (json) => ({
  name: async () => json.name,
  icon: async () => json.iconUrl
})

const CachedProduct = async (json, brand) => ({
  id: async () => idOf(json),
  name: async () => json?.name,
  description: async () => json?.description,
  icon: async () => json?.iconUrl,
  brand
})

const ProductWithParameters = async (product, api) => ({
  ...product,
  parameters: async () =>
    await Promise.all(
      (
        await api(`products/${await product.id()}`)
      ).parameters.map(async (x) => ({
        key: async () =>
          (
            await api(`parameters/${idOfUrl(x._links.parameter.href)}`)
          ).name,
        value: async () => x.variant.value
      }))
    )
})

const ProductWithId = async (id, api) =>
  CachedProduct(await api(`products/${id}`), async () =>
    CachedBrand(await api(`products/${id}/brand`))
  )

const CachedCategory = async (json, products, parameters) => ({
  id: async () => idOf(json),
  name: async () => json.name,
  icon: async () => json.iconUrl,
  products,
  parameters
})

export default function Api(base) {
  const cache = {}
  const get = async (path) => {
    if (!cache[path])
      cache[path] = await (await fetch(new URL(path, base))).json()
    return cache[path]
  }
  const getList = async (type, path) => (await get(path))._embedded[type]
  return {
    categories: async () => ({
      withId: async (id) =>
        await CachedCategory(
          await get(`categories/${id}`),
          async (pageSize) => ({
            page: async (page) => ({
              array: async () =>
                await Promise.all(
                  (
                    await getList(
                      'products',
                      `products/search/findByCategoryId?category=${id}&page=${page}&size=${pageSize}`
                    )
                  )
                    .map(idOf)
                    .map(
                      async (id) =>
                        await ProductWithParameters(
                          await ProductWithId(id, get),
                          get
                        )
                    )
                )
            }),
            totalPages: async () =>
              (
                await get(
                  `products/search/findByCategoryId?category=${id}&size=${pageSize}`
                )
              ).page.totalPages
          }),
          async () =>
            (await get(`categories/${id}/parameters`))._embedded.parameters
              .map((x) => [x.name, x.variants.map((x) => x.value).sort()])
              .sort()
        )
    }),
    superCategories: async () => ({
      withId: async (id) => ({
        categories: async () => ({
          array: async () =>
            await Promise.all(
              (
                await getList('categories', `superCategories/${id}/categories`)
              ).map(CachedCategory)
            )
        })
      }),
      array: async () =>
        await Promise.all(
          (
            await getList('superCategories', 'superCategories')
          ).map(CachedCategory)
        )
    }),
    products: async () => ({
      withId: async (id) =>
        await ProductWithParameters(await ProductWithId(id, get), get)
    })
  }
}
