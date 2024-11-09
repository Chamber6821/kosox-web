import { useCity } from '../api/City'
import Banner from '../components/Sections/Banner/Banner'
import FormSection from '../components/Sections/FormSection/FormSection'
import Goods from '../components/Sections/Goods/Goods'
import Attention from '../components/UI/Attention/Attention'
import SectionTitle from '../components/UI/SectionTitle/SectionTitle'

export default function DeliveryAndPayment ({ api }) {
  const carriers = [
    { imgUrl: '/img/carriers/1.png' },
    { imgUrl: '/img/carriers/2.png' },
    { imgUrl: '/img/carriers/3.png' },
    { imgUrl: '/img/carriers/4.png' },
    { imgUrl: '/img/carriers/5.png' }
  ]
  document.title = 'Доставка и оплата'
  const city = useCity()
  return (
    <main>
      <Banner breadcrumbs={[{ title: 'Главная', url: '/' }, { title: 'Доставка и оплата' }]}>
        Заказать доставку комлектующих по <Attention>{city.Дательный}</Attention> в компании <Attention>KOSOX</Attention>
      </Banner>
      <Goods imgUrl='/img/delivery-goods-img.png' className='cntr' style={{ paddingTop: 70, paddingBottom: 100 }}>
        <p>Находится компания <Attention style={{ fontWeight: 300 }}>KOSOX</Attention> в Российсикой Федерации, городе Санкт-Петербург и мы гарантируем своеверменную доставку оборудования в <Attention style={{ fontWeight: 300 }}>{city.Именительный}</Attention>. Зная, что в нашем деле оперативность играет крайне важную роль, стараемся подобрать настолько сжатые сроки, насколько это возможно и даже быстрее. Фирма <Attention style={{ fontWeight: 300 }}>KOSOX</Attention> подбирает индивидкальный подход к каждому клиенту, поэтому предоставляем доставку по любым запросам, в том числе экспресс-доставку комплектующих из <Attention style={{ fontWeight: 300 }}>Европы</Attention>.</p>
      </Goods>
      <div className='cntr'>
        <h4 className='small-title' style={{ marginBottom: 50, maxWidth: 1280 }}>Мы работаем с надежными и проверенными <Attention>перевозчиками</Attention>, которые помогают нам с вами в плодотворном сотрудничестве, а именно компаниями:</h4>
        <div className='carriers'>
          {carriers.map(carrier => <figure className='carrier' key={carrier.imgUrl}><img src={carrier.imgUrl} alt='carrier' /></figure>)}
        </div>
      </div>
      <div className='cntr'>
        <h4 className='small-title' style={{ marginBottom: 50, maxWidth: 1280 }}>Если вам нужно заказать товары в <Attention>другой город</Attention>, то условия доставки рознятся в зависимости от конечной точки.</h4>
        <Goods imgUrl='/img/delivery-goods-img-two.png' className='goods-reverse'>
          <p>До отделений транспортных компаний <Attention>{city.Родительный}</Attention> доставка производится бесплатно, а также можно осуществить самовывоз по нашему адресу: <Attention>г. Санкт-Петербург, Придорожная аллея, д. 8, лит. А, ПОМЕЩ. 620</Attention>. По городу и области доставка производится по тарифам производителя (в случае осуществления доставки непосредственно им) лиюо по тарифам курьерских компаний. согласно принятых тарифов силами производителя или с привлечением курьерских компаний в сжатые сроки (от одного до двух дней).</p>
        </Goods>
      </div>
      <div className='conditions cntr'>
        <h4 className='small-title conditions_title'><Attention>Условия</Attention> будут следующие:</h4>
        <div className='conditions_inner'>
          <div className='conditions_condition below'>
            <h3>При заказе до 10&nbsp;000&nbsp;рублей</h3>
            <p>Доставка по Санкт-Петербургу — <Attention>300</Attention> рублей.</p>
          </div>
          <div className='conditions_condition above'>
            <h3>При заказе более 10&nbsp;000&nbsp;рублей</h3>
            <p>Доставка предоставляется бесплатная в пределах <Attention>СПб</Attention> и <Attention>КАД</Attention></p>
          </div>
        </div>
      </div>
      <div className='cntr'>
        <SectionTitle style={{ textAlign: 'center', marginBottom: 70 }}>
          <Attention style={{ color: '#858585' }}>Обмен</Attention> и <Attention style={{ color: '#858585' }}>возврат</Attention> отгруженного товара
        </SectionTitle>
        <Goods imgUrl='/img/delivery-goods-img-three.png'>
          <p>Возврат и обмен единиц товара осуществляется согласно действующему законодательству РФ. А именно обмен товара или его возврат разрешается в течение 14 дней со дня покупки, не считая самого этого дня. </p>
        </Goods>
      </div>
      <h4 className='small-title cntr' style={{ marginTop: 50 }}><Attention>ВНИМАНИЕ!!!</Attention> Все чеки и накладные должны быть сохранены до момента решения возникшей проблемы. Если вы планируете вернуть или обменять товар ненадлежащего качества, вы обязаны предоставить <Attention>чек оплаты</Attention>, а также предоставить документы, подтверждающие личность заказчика и заполнить заявку-бланк на возврат денежных средств. Если Вы хотите осуществить возврат либо обмен товара надлежащего качества должны быть сохранены, в первую очередь товарный вид продуктов, целостность упаковки и комплектация заказа. Если данные требования будут нарушены, компания имеет право <Attention>отказать</Attention> в возврате или обмене единицы товара.</h4>
      <div className='conditions cntr'>
        <h4 className='small-title conditions_title'><Attention>Условия</Attention> возврата денежных средств зависит от варианта оплаты:</h4>
        <div className='conditions_inner'>
          <div className='conditions_condition below'>
            <h3>Безналичная <br /> оплата</h3>
            <p>Возвращаются после того, как товар вернется на наш <Attention>склад</Attention></p>
          </div>
          <div className='conditions_condition above'>
            <h3>Банковская картой или Яндекс.Деньги</h3>
            <p>Вернутся в течение <Attention>пяти</Attention> дней после отправленного вами заявления</p>
          </div>
        </div>
      </div>
      <div className='cntr'>
        <SectionTitle>Оплата</SectionTitle>
        <Goods imgUrl='/img/delivery-goods-img-four.png'>
          <p>Счет выставляется <Attention>автоматически</Attention> в момент оформления заказа сайте или в процессе телефонного общения с менеджером по телефону или электронной почте. Мы работаем как с физическими (ИП) так и с юридическими лицами.</p>
        </Goods>
        <h4 className='small-title' style={{ paddingTop: 50, paddingBottom: 20 }}>
          Оплата — производится только по <Attention>БЕЗНАЛИЧНОМУ</Attention> расчету: <br /> <br />
          -По счету <br />
          -По квитанции через банк <br />
          -Оплата банковской картой
        </h4>
      </div>
      <FormSection api={api} className='bg-form' />
    </main>
  )
}
