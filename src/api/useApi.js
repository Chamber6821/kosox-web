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
  const embedded = (json) => json._embedded
  return {
    superCategories: () => ({
      withId: (id) => ({
        categories: () => ({
          array: () => {
            if (!state?.superCategoryWithId?.[id])
              (async () => {
                setState({
                  ...state,
                  superCategoryWithId: {
                    [id]: embedded(
                      await fetchApi(`superCategories/${id}/categories`)
                    ).categories.map(categoryFromJson)
                  }
                })
              })()
            return state?.superCategoryWithId?.[id] || []
          }
        })
      }),
      array: () => {
        if (!state?.superCategories)
          (async () => {
            setState({
              ...state,
              superCategories: embedded(
                await fetchApi('superCategories')
              ).superCategories.map(categoryFromJson)
            })
          })()
        return state?.superCategories || []
      }
    })
  }
}
