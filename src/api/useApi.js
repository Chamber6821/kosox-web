import { useState } from 'react'

const idOf = (entry) => entry?._links?.self?.href?.match(/(\d+)$/)?.[1]

const CachedBrand = (json) => ({
  name: () => json?.name,
  icon: () => json?.iconUrl
})

const CachedProduct = (json, brand) => ({
  id: () => idOf(json),
  name: () => json?.name,
  description: () => json?.description,
  icon: () => json?.iconUrl,
  brand
})

const ProductWithId = (id, api) =>
  CachedProduct(api(`products/${id}`), () =>
    CachedBrand(api(`products/${id}/brand`))
  )

const CachedCategory = (json) => ({
  id: () => idOf(json),
  name: () => json?.name,
  icon: () => json?.iconUrl
})

export default function useApi(base) {
  const [state, setState] = useState({})
  const idOf = (entry) => entry._links.self.href.match(/(\d+)$/)[1]
  const fetchJson = async (...a) => await (await fetch(...a)).json()
  const fetchApi = async (path) => await fetchJson(new URL(path, base))
  const cachedSyncFetchApi = (path) => {
    if (!state[path])
      (async () => {
        setState({ ...state, [path]: await fetchApi(path) })
      })()
    return state[path]
  }
  const syncFetchList = (type, path) =>
    cachedSyncFetchApi(path)?._embedded?.[type] || []

  return {
    categories: () => ({
      withId: (id) => ({
        name: () => cachedSyncFetchApi(`categories/${id}`)?.name || '',
        products: (pageSize) => ({
          page: (page) => ({
            array: () =>
              syncFetchList(
                'products',
                `products/search/findByCategoryId?category=${id}&page=${page}&size=${pageSize}`
              )
                .map(idOf)
                .map((id) => ProductWithId(id, cachedSyncFetchApi))
          }),
          totalPages: () =>
            cachedSyncFetchApi(
              `products/search/findByCategoryId?category=${id}&size=${pageSize}`
            )?.page?.totalPages || 0
        })
      })
    }),
    superCategories: () => ({
      withId: (id) => ({
        categories: () => ({
          array: () =>
            syncFetchList('categories', `superCategories/${id}/categories`).map(
              CachedCategory
            )
        })
      }),
      array: () =>
        syncFetchList('superCategories', 'superCategories').map(CachedCategory)
    }),
    products: () => ({
      withId: (id) => ProductWithId(id, cachedSyncFetchApi)
    })
  }
}
