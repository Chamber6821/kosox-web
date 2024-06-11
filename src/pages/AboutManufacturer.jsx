import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Form from '../components/Form'

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function ({ params: { brand }, api }) {
  const [{ name, description, categories = [] }, setBrand] = useState({})
  document.title = `Производитель ${name}`
  useEffect(() => {
    (async () => {
      const brandEntity = await (await api.brands()).withId(brand)
      setBrand({
        name: await brandEntity.name(),
        description: await brandEntity.description(),
        categories: await Promise.all(
          (await brandEntity.categories()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )
      })
    })()
  }, [brand])
  return (
    <main className='brendabout'>
      <div className='brendabout_bgimg'>
        <img src='./img/Rectangle 94.png' alt='' />
      </div>
      <div className='brendabout_main_flex'>
        <div className='main_left'>
          <h1>{name}</h1>
        </div>
        <div className='brendabout_title'>
          {(description || '')
            .split('\n')
            .map(x => x.trim())
            .map(x => <p style={x === '' ? { marginBottom: '32px' } : {}} key={x}>{x}</p>)}
        </div>
        {categories.length > 0 && (
          <>
            <div className='main_left'>
              <h6>Товары {name}</h6>
            </div>
            <div className='brendabout_cards'>
              {categories.map((x) => (
                <Link key={x.name} to={`/category/${x.id}`}>
                  <div
                    style={{
                      backgroundImage: 'url("/img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")'
                    }}
                    className='brendabout_card'
                  >
                    <div className='brendabout_card_bg' />
                    <h2>{x.name}</h2>
                    <img
                      style={{ maxWidth: 250, maxHeight: 200 }}
                      src={x.icon}
                      alt=''
                    />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
        <Form api={api} />
        <div className='brendabout_btn'>
          <a href=''>Заказать товар {name}</a>
        </div>
      </div>
    </main>
  )
}
