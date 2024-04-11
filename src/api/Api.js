const idOf = (entry) => entry?._links?.self?.href?.match(/(\d+)$/)?.[1]

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

const ProductWithId = async (id, api) =>
  CachedProduct(await api(`products/${id}`), async () =>
    CachedBrand(await api(`products/${id}/brand`))
  )

const CachedCategory = async (json) => ({
  id: async () => idOf(json),
  name: async () => json?.name,
  icon: async () => json?.iconUrl
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
      withId: async (id) => ({
        name: async () => (await get(`categories/${id}`)).name,
        products: async (pageSize) => ({
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
                  .map((id) => ProductWithId(id, get))
              )
          }),
          totalPages: async () =>
            (
              await get(
                `products/search/findByCategoryId?category=${id}&size=${pageSize}`
              )
            ).page.totalPages
        })
      })
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
      withId: async (id) => await ProductWithId(id, get)
    })
  }
}
