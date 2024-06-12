import { useEffect } from 'react'
import { useLocation, useSearch } from 'wouter'

export default function ScrollTop () {
  const location = useLocation()
  const search = useSearch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location, search])
  return <></>
}
