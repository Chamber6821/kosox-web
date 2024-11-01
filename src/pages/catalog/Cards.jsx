import { useState, useEffect } from 'react'
import Card from './Card'
import Button from '../../components/UI/Button/Button'

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

  const [isAllCategories, setIsAllCategories] = useState(false)
  console.log(categories)

  return (
    <div className='kotalog cntr'>
      <div className='kotalog_flex'>
        {!isAllCategories
          ? categories.slice(0, 6).map((x) => (
            <Card
              key={x.id}
              id={x.id}
              title={x.name}
              backgroundImage={x.icon}
              page={category ? `/category/${x.id}` : `/catalog/${x.id}`}
            />
          ))
          : categories.map((x) => (
            <Card
              key={x.id}
              id={x.id}
              title={x.name}
              backgroundImage={x.icon}
              page={category ? `/category/${x.id}` : `/catalog/${x.id}`}
            />
          ))}
      </div>
      {categories.length
        ? <Button className='kotalog_all btn' onClick={() => setIsAllCategories(prev => !prev)}>{!isAllCategories ? 'Смотреть все' : 'Скрыть'}</Button>
        : <></>}
    </div>
  )
}
