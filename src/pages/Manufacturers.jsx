import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import Cards from './catalog/Cards'

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function ({ api }) {
  const [manufacturers, setManufacturers] = useState([])
  document.title = 'Производители'
  useEffect(() => {
    (async () => {
      setManufacturers(
        await Promise.all(
          (await (await api.manufacturers()).array()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )
      )
    })()
  }, [])
  return (
    <main>
      <div
        style={{
          backgroundImage:
            'url("./img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")'
        }}
        className='header_main'
      >
        <div className='header_main_bg' />
        <div className='header_main_flex'>
          <h1>Производители</h1>
        </div>
      </div>
      <div className='manufacturers'>
        <div className='manufacturers_speak'>
          <h2>
            Мы торгуем с европейскими и мировыми <br /> брендами!
          </h2>
          <a href=''>Оставить заявку</a>
        </div>
        <div className='our_brends content'>
          <h2>Наши бренды</h2>
          <div className='our_brends_cards'>
            {manufacturers.map((x) => (
              <div key={x.name} className='our_brends_card'>
                <img src={x.icon} alt='' />
                <div className='our_brends_card_hover'>
                  <h5>{x.name}</h5>
                  <Link to={`/about-manufacturer/${x.id}`}>Подробнее...</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cards api={api} />
    </main>
  )
}
