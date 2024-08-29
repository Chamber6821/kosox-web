import { useEffect, useState } from 'react'
import Form from '../components/Form'
import Card from './catalog/Card'

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function AboutManufacturer ({ params: { id }, api }) {
  const [{ name, description, categories = [] }, setBrand] = useState({})
  document.title = `Производитель ${name}`
  useEffect(() => {
    (async () => {
      const manufacturerEntity = await (await api.manufacturers()).withId(id)
      setBrand({
        name: await manufacturerEntity.name(),
        description: await manufacturerEntity.description(),
        categories: await Promise.all(
          (await manufacturerEntity.categories()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )
      })
    })()
  }, [id, api])
  return (
    <main className='brendabout'>
      <div className='brendabout_bgimg'>
        <img src='./img/Rectangle 94.png' alt='' />
      </div>
      <div className='brendabout_main_flex'>
        <div className='main_left'>
          <h1>{name}</h1>
        </div>
        <div className='brendabout_title' style={{ display: 'block' }}>
          {(description || '')
            .split('\n')
            .map(x => x.trim())
            .map(x => <p style={x === '' ? { marginBottom: '32px' } : {}} key={x}>{x}</p>)}
        </div>
        <div className='brendabout_btn' style={{ marginTop: '0', marginBottom: '100px' }}>
          <a href='#form'>Заказать товар {name}</a>
        </div>
        {categories.length > 0 && (
          <>
            <div className='main_left'>
              <h6>Товары {name}</h6>
            </div>
            <div className='brendabout_cards'>
              {categories.map((x) => (
                <Card key={x.name} title={x.name} backgroundImage={x.icon} page={`/catalog/${x.id}`} />
              ))}
            </div>
          </>
        )}
        <div id='form'>
          <Form api={api} />
        </div>
      </div>
    </main>
  )
}
