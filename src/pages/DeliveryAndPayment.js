export default function () {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='navbar_logo'>
            <a href='/'>
              <div className='logo'>
                <strong>KOSOX</strong>
              </div>
            </a>
          </div>
          <div className='navbar_menu'>
            <a href='mailto:'>zakaz@mgb-bearings.ru</a>
          </div>
          <div className='navbar_icon'>
            <a href='#'>
              <img
                src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg'
                alt=''
              />
            </a>
            <a href='#'>
              <img
                src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg'
                alt=''
              />
            </a>
          </div>
        </nav>
        <nav className='navbar_top'>
          <ul className='navbar_top_menu'>
            <li className='navbar_top_menu_li'>
              <a href='/'>Главная</a>
            </li>
            <li className='navbar_top_menu_li'>
              <a href=''>О компании</a>
            </li>
            <li className='navbar_top_menu_li'>
              <a href='./shippingandpayment.html'>Доставка и Оплата</a>
            </li>
            <li className='navbar_top_menu_li'>
              <a href='./manufacturers.html'>Производители</a>
            </li>
            <li className='navbar_top_menu_li'>
              <a href='./faq.html'>FAQ</a>
            </li>
            <li className='navbar_top_menu_li'>
              <a href='./contact.html'>Контакты</a>
            </li>
          </ul>
        </nav>
        <div className='navbar_phone'>
          <div className='navbar_phone_logo'>
            <a href='/'>
              <div className='logo'>
                <strong>KOSOX</strong>
              </div>
            </a>
          </div>
          <div className='navbar_phone_menu'>
            <i onclick='menuop()' className='bx bx-menu-alt-right' />
          </div>
          <div className='navbar_phone_right_menu'>
            <i onclick='menucl()' className='bx bxs-right-arrow-alt' />
            <ul className='navbar_top_menu'>
              <li className='navbar_top_menu_li'>
                <a href=''>Доставка и оплата</a>
              </li>
              <li className='navbar_top_menu_li'>
                <a href=''>О компании</a>
              </li>
              <li className='navbar_top_menu_li'>
                <a href=''>Контакты</a>
              </li>
              <li className='navbar_top_menu_li'>
                <a href=''>FAQ</a>
              </li>
              <li className='navbar_top_menu_li'>
                <a href=''>Главная</a>
              </li>
              <li className='navbar_top_menu_li'>
                <a href=''>Партнерам</a>
              </li>
            </ul>
            <div className='navbar_phone_right_menu_mail'>
              <a href='mailto:'>zakaz@mgb-bearings.ru</a>
            </div>
            <div className='navbar_icon'>
              <a href='#'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg'
                  alt=''
                />
              </a>
              <a href='#'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg'
                  alt=''
                />
              </a>
              <a href='#'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
        <nav className='navbar_down'>
          <a href='' className='red_border'>
            КАТАЛОГ ТОВАРОВ
          </a>
          <div className='navbar_down_inp'>
            <input placeholder='Введите наименование' type='text' />
            <img src='./img/find.svg' alt='' />
          </div>
        </nav>
      </header>
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
            <h1>Доставка и оплата</h1>
          </div>
        </div>
        <div className='shopandpay'>
          <div className='shopandpay_content'>
            <div className='main_left'>
              <h2>Доставка</h2>
            </div>
            <div className='shopandpay_content_flex'>
              <img
                className='shopandpay_content_flex_closebox'
                src='./img/closebox.svg'
                alt=''
              />
              <img
                className='shopandpay_content_flex_Black1'
                src='./img/Black(1).png'
                alt=''
              />
              <p>
                Мы находимся в Санкт-Петербурге, но готовы организовать доставку
                не только по всем городам России, но и в страны СНГ. Понимаем,
                что оперативность в нашем деле на первом месте и поэтому
                стараемся доставить продукцию в максимально сжатые сроки.
                Возможна экспресс-поставка комплектующих из стран Европы по
                предварительному индивидуальному заказу. Благодаря отработанной
                схеме логистики и собственному складу комплектующих, доставка
                продукции производиться оперативно. Мы работаем с надежными и
                проверенными перевозчиками:
              </p>
              <ul>
                <li>-ПЭК</li>
                <li>-СДЭК</li>
                <li>-КИТ</li>
                <li>-DHL</li>
                <li>-DPD</li>
              </ul>
              <p>
                Доставка до отделения транспортных компаний в Санкт-Петербурге
                производится бесплатно. Самовывоз можно осуществить по адресу:
                198099 г. Санкт-Петербург, ул. Оборонная, д. 10, литера А,
                помещение 306. каб. 24-8. Доставка по городу и области
                проводится согласно принятых тарифов силами производителя или с
                привлечением курьерских компаний в сжатые сроки (от одного до
                двух дней). -При заказе до 10 000 рублей доставка по
                Санкт-Петербургу — 300 рублей -При заказе более 10 000 рублей
                доставка предоставляется бесплатная в пределах СПб и КАД Наша
                служба логистики поможет подобрать самый оптимальный вариант
                доставки для вас с учетом сроков и стоимости услуг.
              </p>
            </div>
          </div>
          <div className='shopandpay_content'>
            <div className='main_left'>
              <h2>
                Обмен и возврат
                <br /> отгруженного товар
              </h2>
            </div>
            <div className='shopandpay_content_flex'>
              <img
                className='shopandpay_content_flex_box4'
                src='./img/box4.svg'
                alt=''
              />
              <img
                className='shopandpay_content_flex_moneybox'
                src='./img/moneybox.svg'
                alt=''
              />
              <p>
                Процесс обмена и возврата продукции производится с соблюдением
                действующего законодательства РФ. Наши клиенты имею право
                обменять товар на аналогичный или вернуть его в течение 14 дней,
                не считая дня покупки:
              </p>
              <ul>
                <li>
                  -Денежные средства, проведенные по безналичной оплате,
                  возвращаются после того, как товар вернется на наш склад
                </li>
                <li>
                  -Денежные средства, переведенные с помощью банковской карты
                  или Яндекс.Денег вернутся в течение пяти дней после
                  отправленного вами заявления
                </li>
              </ul>
              <p>
                Обращаем внимание! Сохраняйте все чеки и накладные до момента
                урегулирования проблемы. В случае возврата или обмена продукции,
                клиент обязан предъявить чек, а также предоставить документы,
                подтверждающие личность заказчика и заполнить заявку-бланк на
                возврат денежных средств. Если Вы хотите осуществить возврат
                либо обмен товара надлежащего качества должны быть сохранены
                товарный вид продуктов, целостность упаковки и комплектация
                заказа. В случае повреждения или наличия следов эксплуатации Вам
                может быть отказано в удовлетворении требований
              </p>
            </div>
          </div>
          <div className='shopandpay_content'>
            <div className='main_left'>
              <h2>Оплата</h2>
            </div>
            <div className='shopandpay_content_flex'>
              <img
                className='shopandpay_content_flex_savdo'
                src='./img/savdo.svg'
                alt=''
              />
              <img
                className='shopandpay_content_flex_karta'
                src='./img/karta.svg'
                alt=''
              />
              <p>Оплата — производится только по безналичному расчету:</p>
              <ul>
                <li>-Безналичная оплата по счету</li>
                <li>-Безналичная оплата по квитанции через банк</li>
                <li>-Безналичная оплата банковской картой</li>
                <li>-Безналичная оплата банковской картой</li>
              </ul>
              <p>
                Счет выставляется автоматически в момент оформления заказа сайте
                или в процессе телефонного общения с менеджером по телефону или
                электронной почте. Мы работаем как с физическими так и с
                юридическими лицами.
              </p>
            </div>
          </div>
        </div>
      </main>
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
              <a className='allFooter_div_ahref' href='/'>
                О компании
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Доставка и оплата
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Партнерам
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Контакты
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                FAQ
              </a>
            </div>
          </div>
          <div className='allFooter_div_block_two'>
            <h6 className='allFooter_div_title'>Адрес</h6>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Главная
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                О компании
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Доставка и оплата
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Партнерам
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Контакты
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                FAQ
              </a>
            </div>
          </div>
          <div className='allFooter_div_block_three'>
            <h6 className='allFooter_div_title'>Контакты</h6>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Главная
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                О компании
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Доставка и оплата
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Партнерам
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                Контакты
              </a>
            </div>
            <div className='allFooter_div_ahref_div'>
              <a className='allFooter_div_ahref' href='/'>
                FAQ
              </a>
            </div>
          </div>
          <div className='allFooter_div_block_four'>
            <p className='allFooter_div_block_four_p'>
              Полный спектр промышленного снабжения. Обращаем ваше внимание на
              то, что данный Интернет-сайт носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой,
              определяемой положениями Статьи 437 Гражданского кодекса
              Российской Федерации. Для получения подробной информации,
              стоимости продукции и условий обращайтесь к менеджерам. Вся
              информация на сайте – собственность интернет-магазина
              mgb-bearings.ru. Публикация информации с сайта mgb-bearings.ru без
              разрешения запрещена. Все права защищены. Вы принимаете условия
              политики конфиденциальности и пользовательского соглашения каждый
              раз, когда оставляете свои данные в любой форме обратной связи на
              сайте mgb-bearings.ru.
            </p>
          </div>
        </div>
        <div className='allFooter_address'>
          <h1 className='allFooter_address_h1'>
            © 2023 Подшипники оптом и в розницу.
          </h1>
          <div className='allFooter_address_div'>
            <a href=''>
              <p className='allFooter_address_div_p'>Разработано WOW</p>
            </a>
          </div>
          <div className='allFooter_address_img_div'>
            <img
              className='allFooter_address_img_div_img'
              src='./img/visa10.svg'
              alt=''
            />
            <img
              className='allFooter_address_img_div_img'
              src='./img/visa10.svg'
              alt=''
            />
            <img
              className='allFooter_address_img_div_img'
              src='./img/visa10.svg'
              alt=''
            />
            <img
              className='allFooter_address_img_div_img'
              src='./img/visa10.svg'
              alt=''
            />
          </div>
        </div>
      </footer>
    </>
  )
}
