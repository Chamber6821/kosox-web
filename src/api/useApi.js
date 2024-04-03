import { useState } from 'react'

export default function useApi(base) {
  const [state, setState] = useState({})
  const categoryFromJson = (json) => ({
    id: () => json._links.self.href.match(/(\d+)$/)[1],
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
