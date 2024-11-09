import { useCity } from '../api/City'
import './css/About.css'
import Attention from '../components/UI/Attention/Attention'
import Banner from '../components/Sections/Banner/Banner'
import Goods from '../components/Sections/Goods/Goods'
import Benefits from '../components/Sections/Benefits/Benefits'
import { useEffect, useState } from 'react'
import Partners from '../components/Sections/Partners/Partners'
import Cards from './catalog/Cards'
import FormSection from '../components/Sections/FormSection/FormSection'

export default function About ({ api }) {
  document.title = 'О компании'
  const city = useCity()

  const [manufacturers, setManufacturers] = useState([])
  document.title = 'Производители'
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
        breadcrumbs={[
          {
            title: 'Главная',
            url: '/'
          },
          {
            title: 'О компании',
            url: '/about'
          }
        ]}
      >
        Купить подшипники в <Attention>{city.Предложный}</Attention> в компании <Attention>KOSOX</Attention>
      </Banner>
      <Goods imgUrl='/img/catalog-about-img-first.png' className='cntr about_goods'>
        <p>На рынке представлено большое количество поставщиков различного промышленного обороудования, но найти компанию, которая совмещает в себе широкий ассортимент, приятные цены и ГОСТ/ТУ/ISO качество всех товаров практически невозможно. Наша фирма KOSOX одна из немногих, кто дает вам шанс найти такого поставщика!</p>
      </Goods>

      <div
        className='cntr'
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <p style={{
          maxWidth: '1000px',
          textAlign: 'center',
          fontSize: '25px',
          fontWeight: 700
        }}
        >
          Обращаясь в нашу фирму, вы получаете надежного и ответственного <Attention>партнёра-поставщика</Attention>, который понимает, как устроен современный рынок потребления его продукции и готов предоставить конкурентоспособные условия для <Attention>каждого</Attention> заказчика.
        </p>
      </div>

      <Goods imgUrl='/img/catalog-about-img-second.png' className='cntr about_goods about_goods_second'>
        <p>Компания ООО "КОСОКС" занимается оптово-розничной продажей промышленного комплектующего в <Attention>{city.Предложный}</Attention> и других городах России. На каждую единицу товара мы предоставляем уникальный паспорт и сертификат соответствия, что демонстрирует и доказывает наивысшее качество производимой продукции. Вся наша продукция проходит через полный цикл тестирования, выяявления и уничтожение скрытых недостатков с использованием нейросетей. Это позволяет гарантировать то самое наивысшее качество, о котором мы заявляем. Комплектующие производятся по двум стандартам <Attention>ГОСТ и ISO</Attention>. А также мы можем выполнять индивидуальные заказы по Вашим чертежам.</p>
      </Goods>

      <Partners
        partners={manufacturers}
      >
        Мы сотрудничаем <Attention>БЕЗ ПОСРЕДНИКОВ</Attention> с мировыми брендами, такими как:
      </Partners>
      <Cards api={api}>
        Сотрудничество с данными брендами позволяет нам предоставлять вам огромное количество товаров <Attention>всех</Attention> категорий:
      </Cards>
      <div className='cntr' style={{ paddingBottom: 70 }}>
        <h4 className='small-title'>Для комфорта наших <Attention>клиентов</Attention>, мы постарались создать наилучшие условия на рынке, позволяющие найти <Attention>индвидуальный</Attention> подход к каждому:</h4>
        <Benefits />
      </div>
      <FormSection api={api} className='bg-form' />
    </main>
  )
}
