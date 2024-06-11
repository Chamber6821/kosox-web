const idOfUrl = (url) => `${url}`.match(/(\d+)$/)?.[1]
const idOf = (entry) => idOfUrl(entry?._links?.self?.href)

const CachedBrand = async (json) => ({
  id: async () => idOf(json),
  name: async () => json.name,
  icon: async () => json.iconUrl,
  description: async () => json.description
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
    (
      await api(`products/${await product.id()}/parameters`)
    )._embedded.productParameters.map((x) => ({
      key: async () => x.name,
      value: async () => x.value
    }))
})

const ProductWithId = async (id, api) =>
  CachedProduct(await api(`products/${id}`), async () =>
    CachedBrand(await api(`products/${id}/brand`))
  )

const CachedCategory = async (json) => ({
  id: async () => idOf(json),
  name: async () => json.name,
  icon: async () => json.iconUrl
})

const Filters = (object) =>
  Object.entries(object)
    .flatMap(([key, values]) =>
      values.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
    )
    .join('&')

const CategoryWithProducts = async (category, api) => ({
  ...category,
  products: async (pageSize) => ({
    filtered: async (filters) => ({
      page: async (page) => ({
        array: async () =>
          (
            await api(
              `categories/${await category.id()}/products/filtered?page=${page}&size=${pageSize}&${Filters(
                filters
              )}`
            )
          ).content.map((x) => ({
            id: async () => x.id,
            name: async () => x.name,
            description: async () => x.description,
            icon: async () => x.icon,
            brand: async () => ({
              name: async () => x.brandName,
              icon: async () => x.brandIcon
            })
          }))
      }),
      totalPages: async () =>
        (
          await api(
            `categories/${await category.id()}/products/filtered?size=${pageSize}&${Filters(
              filters
            )}`
          )
        ).totalPages
    }),
    page: async (page) => ({
      array: async () =>
        await Promise.all(
          (
            await api(
              `products/search/findByCategoryId?category=${await category.id()}&page=${page}&size=${pageSize}`
            )
          )._embedded.products
            .map(idOf)
            .map(
              async (id) =>
                await ProductWithParameters(await ProductWithId(id, api), api)
            )
        )
    }),
    totalPages: async () =>
      (
        await api(
          `products/search/findByCategoryId?category=${await category.id()}&size=${pageSize}`
        )
      ).page.totalPages
  })
})

const CategoryWithParameters = async (category, api) => ({
  ...category,
  parameters: async () =>
    Object.entries(await api(`categories/${await category.id()}/parameters`))
      .map(([key, value]) => [key, value.sort()])
      .sort()
})

const BrandWithCategories = async (brand, api) => ({
  ...brand,
  categories: async () =>
    await Promise.all(
      (
        await api(
          `categories/search/findAllByBrand?brandId=${await brand.id()}`
        )
      )._embedded.categories.map(CachedCategory)
    )
})

export default function Api (base) {
  const cache = {}
  const afetch = async (path, ...args) =>
    await fetch(new URL(path, base), ...args)
  const get = async (path) => {
    if (!cache[path]) cache[path] = await (await afetch(path)).json()
    return cache[path]
  }
  return {
    addFormRequest: async (url, data) =>
      await afetch('forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, page: url })
      }),
    categories: async () => ({
      withId: async (id) =>
        await CategoryWithParameters(
          await CategoryWithProducts(
            await CachedCategory(await get(`categories/${id}`)),
            get
          ),
          get
        )
    }),
    superCategories: async () => ({
      withId: async (id) => ({
        name: async () => (await get(`superCategories/${id}`)).name,
        categories: async () => ({
          array: async () =>
            await Promise.all(
              (
                await get(`superCategories/${id}/categories`)
              )._embedded.categories.map(CachedCategory)
            )
        })
      }),
      array: async () =>
        await Promise.all(
          (await get('superCategories'))._embedded.superCategories.map(
            CachedCategory
          )
        )
    }),
    products: async (pageSize) => ({
      withId: async (id) =>
        await ProductWithParameters(await ProductWithId(id, get), get),
      search: async (q) => ({
        page: async (page) => ({
          array: async () =>
            await Promise.all(
              (
                await get(
                  `products/search/search?fragment=${q}&page=${page}&size=${pageSize}`
                )
              )._embedded.products
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
          (await get(`products/search/search?fragment=${q}&size=${pageSize}`))
            .page.totalPages
      })
    }),
    brands: async () => ({
      withId: async (id) =>
        await BrandWithCategories(
          await CachedBrand(await get(`brands/${id}`)),
          get
        ),
      array: async () =>
        await Promise.all(
          (await get('brands?size=9999'))._embedded.brands.map(CachedBrand)
        )
    })
  }
}
