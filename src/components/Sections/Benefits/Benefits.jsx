import { useCity } from '../../../api/City'

const Benefits = () => {
  const city = useCity()

  return (
    <div className='primushestva_company_cards'>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/2.svg' alt='icon' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Отличные цены </h3>
          <h4>У нас одни из самых минимальных цен на рынке</h4>
        </div>
      </div>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/5.svg' alt='icon' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Доступность</h3>
          <h4>Доставляем товары по всей Российской Федерации и {city.Предложный} в частности</h4>
        </div>
      </div>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/6.svg' alt='icon' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Скорость доставки</h3>
          <h4>
            На нашем складе лежит большое количество товаров уже готовых к
            отправке
          </h4>
        </div>
      </div>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/3.svg' alt='' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Гарантия качества</h3>
          <h4>Все наши изделия с гарантией ГОСТ/ТУ/ISO качества</h4>
        </div>
      </div>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/4.svg' alt='' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Поставщики</h3>
          <h4>
            Наши партнеры - это ведущие производители Японии, Франции,
            Германии, Италии, Англии, Китая
          </h4>
        </div>
      </div>
      <div className='primushestva_company_cards_card'>
        <div className='primushestva_company_cards_card_img'>
          <img src='./img/advantages/1.svg' alt='' />
        </div>
        <div className='primushestva_company_cards_card_title'>
          <h3>Удобство клиентов</h3>
          <h4>
            Мы работаем без посредников, а значит вам не придется лишний раз
            переплачивать
          </h4>
        </div>
      </div>
    </div>
  )
}
export default Benefits
