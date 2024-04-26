import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function ScrollTop ({}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [useLocation()])
  return <></>
}
