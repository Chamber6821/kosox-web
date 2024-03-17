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
            <h1>Каталог</h1>
            <h1>/</h1>
            <h1>Ареометры</h1>
          </div>
        </div>
        <div className='filterkotalog'>
          <div className='filterkotalog_flex'>
            <div className='filterkotalog_filter'>
              <div className='filterkotalog_filter_title'>
                <h2>Фильтр</h2>
                <img src='./img/filter.svg' alt='' />
              </div>
              <div
                className='accordion filterkotalog_filter_title'
                id='accordionPanelsStayOpenExample'
              >
                <div
                  style={{ flexDirection: 'column' }}
                  className='accordion-item '
                >
                  <h2
                    className='accordion-header'
                    id='panelsStayOpen-headingOne'
                  >
                    <button
                      className='btn btn-secondary dropdown-toggle'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseOne'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseOne'
                    >
                      Категории
                    </button>
                  </h2>
                  <div
                    style={{ backgroundColor: '#00000000' }}
                    id='panelsStayOpen-collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='panelsStayOpen-headingOne'
                  >
                    <ul className='dropdown-menu2'>
                      <li>
                        <label htmlFor='checkbox_id_first'>Ареометры</label>
                        <div className='checkbox-wrapper'>
                          <input type='checkbox' id='checkbox_id_first' />
                        </div>
                      </li>
                      <li>
                        <label htmlFor='checkbox_id_second'>Ареометры</label>
                        <div className='checkbox-wrapper'>
                          <input type='checkbox' id='checkbox_id_second' />
                        </div>
                      </li>
                      <li>
                        <label htmlFor='checkbox_id_third'>Ареометры</label>
                        <div className='checkbox-wrapper'>
                          <input type='checkbox' id='checkbox_id_third' />
                        </div>
                      </li>
                      <li>
                        <label htmlFor='checkbox_id_four'>Ареометры</label>
                        <div className='checkbox-wrapper'>
                          <input type='checkbox' id='checkbox_id_four' />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  style={{ flexDirection: 'column' }}
                  className='accordion-item '
                >
                  <h2
                    className='accordion-header'
                    id='panelsStayOpen-headingTwo'
                  >
                    <button
                      className='btn btn-secondary dropdown-toggle'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseTwo'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseTwo'
                    >
                      Категории
                    </button>
                  </h2>
                  <div
                    style={{ backgroundColor: '#00000000' }}
                    id='panelsStayOpen-collapseTwo'
                    className='accordion-collapse collapse show'
                    aria-labelledby='panelsStayOpen-headingTwo'
                  />
                </div>
                <div
                  style={{ flexDirection: 'column' }}
                  className='accordion-item '
                >
                  <h2
                    className='accordion-header'
                    id='panelsStayOpen-headingThree'
                  >
                    <button
                      className='btn btn-secondary dropdown-toggle'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseThree'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseThree'
                    >
                      Категории
                    </button>
                  </h2>
                  <div
                    style={{
                      backgroundColor: '#00000000',
                      textAlign: 'center'
                    }}
                    id='panelsStayOpen-collapseThree'
                    className='accordion-collapse collapse show'
                    aria-labelledby='panelsStayOpen-headingThree'
                  >
                    <div className='range'>
                      <div className='sliderValue'>
                        <span className='sliderValue_span'>100</span>
                      </div>
                      <div className='field'>
                        <div className='value left'>0</div>
                        <input
                          className='field_inp'
                          type='range'
                          min={0}
                          max={200}
                          defaultValue={100}
                          step={1}
                        />
                        <div className='value right '>200</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filterkotalog_filter_btn'>
                <button onclick='filtercl()'>Закрыть</button>
                <button onclick='filtercl()'>Применить</button>
              </div>
            </div>
            <div className='filterkotalog_button_fiter'>
              <button onclick='filterop()'>Фильтр</button>
            </div>
            <div className='filterkotalog_cards'>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <a href=''>
                <div className='filterkotalog_card'>
                  <div className='filterkotalog_card_img'>
                    <div className='filterkotalog_card_img_bg' />
                    <img
                      src='./img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png'
                      alt=''
                    />
                  </div>
                  <div className='filterkotalog_card_title'>
                    <h2>Ареометр для антифриза FFH</h2>
                    <img src='./img/logo-150x67-12.png' alt='' />
                  </div>
                </div>
              </a>
              <div className='filterkotalog_cards_nav'>
                <div className='filterkotalog_cards_nav_flex'>
                  <p>1</p>
                  <p>2</p>
                  <p className='activa_nav red_border'>3</p>
                  <img src='./img/top.svg' alt='' />
                </div>
                <div className='filterkotalog_cards_nav_btn'>
                  <a href=''>Назад</a>
                </div>
              </div>
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
