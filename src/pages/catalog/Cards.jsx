import { useState, useEffect } from 'react'
import Card from './Card'

export default function Cards ({ api, category = undefined }) {
  const [{ categories = [] }, setContent] = useState({})
  useEffect(() => {
    (async () => {
      const categories = await api.categories()
      const scEntity = await categories.withId(category)
      const categoriesToRender = category
        ? await scEntity.subcategories()
        : categories
      setContent({
        categories: await Promise.all(
          (await categoriesToRender.array()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )
      })
    })()
  }, [api, category])
  return (
    <div className='kotalog'>
      <div className='kotalog_flex'>
        {categories.map((x) => (
          <Card
            key={x.id}
            id={x.id}
            title={x.name}
            backgroundImage={x.icon}
            page={category ? `/category/${x.id}` : `/catalog/${x.id}`}
          />
        ))}
      </div>
    </div>
  )
}
