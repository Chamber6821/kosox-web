import { useCity } from '../api/City'
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
export default function Manufacturers ({ api }) {
  const [manufacturers, setManufacturers] = useState([])
  document.title = 'Производители'
  const city = useCity()
  useEffect(() => {
    (async () => {
      setManufacturers(
        (await Promise.all(
          (await (await api.manufacturers()).array()).map(async (x) => ({
            id: await x.id(),
            visible: await x.visible(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )).filter(x => x.visible)
      )
    })()
  }, [api])
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
          <h1>Купить в {city.Предложный} продукцию мировых брендов</h1>
        </div>
      </div>
      <div className='manufacturers'>
        <div className='manufacturers_speak'>
          <h2>
            Мы торгуем с европейскими и мировыми <br /> брендами!
          </h2>
          <a href='/contacts'>Оставить заявку</a>
        </div>
        <div className='our_brends content'>
          <h2>Бренды с которыми мы сотрудничаем</h2>
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
