export default function Footer () {
  return (
    <footer className='allFooter'>
      <div className='allFooter_div'>
        <div className='allFooter_div_block_one'>
          <h6 className='allFooter_div_title'>Меню</h6>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/'>
              Главная
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/about'>
              О компании
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/delivery-and-payment'>
              Доставка и оплата
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/manufacturers'>
              Партнерам
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/contacts'>
              Контакты
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='/faq'>
              FAQ
            </a>
          </div>
        </div>

        <div className='allFooter_div_block_three'>
          <h6 className='allFooter_div_title'>Контакты</h6>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='https:/telegram.im/@kosox78'>
              Telegram (@kosox78)
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='https://api.whatsapp.com/send?phone=79818800222'>
              Whatsapp (+79818800222)
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='mailto:zakaz@kosox.ru'>
              zakaz@kosox.ru
            </a>
          </div>
          <div className='allFooter_div_ahref_div'>
            <a className='allFooter_div_ahref' href='+79818800222'>
              +7(981)880-02-22
            </a>
          </div>
        </div>
        <div className='allFooter_div_block_four'>
          <p className='allFooter_div_block_four_p'>
            Полный спектр промышленного снабжения. Обращаем ваше внимание на то,
            что данный Интернет-сайт носит исключительно информационный характер
            и ни при каких условиях не является публичной офертой, определяемой
            положениями Статьи 437 Гражданского кодекса Российской Федерации.
            Для получения подробной информации, стоимости продукции и условий
            обращайтесь к менеджерам. Вся информация на сайте – собственность
            интернет-магазина kosox.ru. Публикация информации с сайта
            kosox.ru без разрешения запрещена. Все права защищены. Вы
            принимаете условия политики конфиденциальности и пользовательского
            соглашения каждый раз, когда оставляете свои данные в любой форме
            обратной связи на сайте kosox.ru.
          </p>
        </div>
      </div>
      <div className='allFooter_address'>
        <h1 className='allFooter_address_h1'>
          ©2023 Подшипники оптом и в розницу.
        </h1>
        <div className='allFooter_address_div'>
          <a href='https://wowtika.com'>
            <p className='allFooter_address_div_p'>Разработано Wowtika</p>
          </a>
        </div>
        <div className='allFooter_address_img_div'>
          <img
            className='allFooter_address_img_div_img'
            src='/img/visa-mastercard-mir@2x.png'
            alt='icon'
          />
          <img
            className='allFooter_address_img_div_img'
            src='/img/sberbank@2x.png'
            alt='icon'
          />
          <img
            className='allFooter_address_img_div_img'
            src='/img/tinkoff@2x.png'
            alt='icon'
          />
          <img
            className='allFooter_address_img_div_img'
            src='/img/yandexmoney@2x.png'
            alt='icon'
          />
          <img
            className='allFooter_address_img_div_img'
            src='/img/paypal@2x.png'
            alt='icon'
          />
        </div>
      </div>
    </footer>
  )
}
