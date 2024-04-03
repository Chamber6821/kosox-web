import { useState } from 'react'

export default function useApi(base) {
  const [state, setState] = useState({})
  const idOf = (entry) => entry._links.self.href.match(/(\d+)$/)[1]
  const categoryFromJson = (json) => ({
    id: () => idOf(json),
    name: () => json.name,
    icon: () => json.iconUrl
  })
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
              ).map((x) => ({
                id: () => idOf(x),
                name: () => x.name,
                icon: () => x.iconUrl,
                brand: () => ({
                  icon: () =>
                    cachedSyncFetchApi(`products/${idOf(x)}/brand`)?.iconUrl
                })
              }))
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
              categoryFromJson
            )
        })
      }),
      array: () =>
        syncFetchList('superCategories', 'superCategories').map(
          categoryFromJson
        )
    })
  }
}
