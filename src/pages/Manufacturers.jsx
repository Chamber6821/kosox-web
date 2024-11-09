import { useCity } from '../api/City'
import { useEffect, useState } from 'react'
import Cards from './catalog/Cards'
import Banner from '../components/Sections/Banner/Banner'
import Partners from '../components/Sections/Partners/Partners'
import Attention from '../components/UI/Attention/Attention'
import SectionTitle from '../components/UI/SectionTitle/SectionTitle'
import Goods from '../components/Sections/Goods/Goods'

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
      <Banner
        breadcrumbs={[{ title: 'Главная', url: '/' }, { title: 'Производители' }]}
      >
        Купить в <Attention>{city.Предложный}</Attention> продукцию мировых брендов
      </Banner>
      <SectionTitle className='cntr' style={{ fontWeight: 300, textAlign: 'center', marginTop: 70, marginBottom: 50, lineHeight: 1.5 }}><Attention style={{ color: '#858585', fontWeight: 700 }}>KOSOX</Attention> предоставляет товары мировых брендов</SectionTitle>
      <Goods className='cntr' style={{ marginBottom: 100 }} imgUrl='/img/manufactures-goods-img.png'>
        <p className='catalog_start_text-bold'>У нашей компании большое количество партнеров, приобретенных за годы работы. С нами сотрудничают европейские, китайские и другие мировые бренды промышленных товаров</p>
        <p>Эти товары придут вам в наилучшем виде, несмотря на все ограничения. Мы знаем как сделать ваш бизнес эффективным с помощью нашего оборудования</p>
      </Goods>
      <Partners partners={manufacturers} style={{ marginBottom: 100 }}>
        <SectionTitle style={{ textAlign: 'left' }}>
          Бренды, с которыми мы <br /><Attention>сотрудничаем</Attention>
        </SectionTitle>
      </Partners>
      <Cards api={api} style={{ paddingTop: 0, borderBottom: '1px solid #ff5f31' }}>
        Сотрудничество с данными брендами позволяет нам предоставлять вам огромное количество товаров <Attention>всех</Attention> категорий:
      </Cards>
    </main>
  )
}
