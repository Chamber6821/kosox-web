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
            <h1>FAQ</h1>
          </div>
        </div>
        <section className='section_page'>
          <div className='main_left'>
            <h6>Вопрос - ответ</h6>
          </div>
          <div className='section_page_elemnts'>
            <div className='promishlenost_acc'>
              <div className='accordion content' id='accordionExample'>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      <img src='./img/blackic.svg' alt='' />
                      Машиностроение
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <strong>This is the first item's accordion body.</strong>{' '}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      <img src='./img/blackic.svg' alt='' />
                      Машиностроение
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Самовывоз можно осуществить по адресу: 198099 г.
                      Санкт-Петербург, ул. Оборонная, д. 10, литера А, помещение
                      306. каб. 24-8. График работы офиса: ПН — ПТ с 9:00 до
                      18:00
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      <img src='./img/blackic.svg' alt='' />
                      Машиностроение
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <strong>This is the third item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          className='contact_form'
        >
          <div className='contact_form_flex'>
            <h2>Оставьте вашу заявку</h2>
            <input placeholder='Имя' type='text' name='name' />
            <input placeholder='Имя' type='text' name='surname' />
            <input placeholder='Имя' type='text' name='phone' />
            <button>Отправить</button>
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
