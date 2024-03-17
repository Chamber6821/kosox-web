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
            <h1>Каталог</h1>
          </div>
        </div>
        <div className='kotalog'>
          <div className='kotalog_flex'>
            <div
              style={{
                backgroundImage: 'url("./img/car-repair-garage 1.png")'
              }}
              className='kotalog_card'
            >
              <div className='kotalog_card_bg' />
              <h3>Промышленное снабжение</h3>
              <a href=''>ТОВАРЫ</a>
            </div>
            <div
              style={{
                backgroundImage: 'url("./img/car-repair-garage 1.png")'
              }}
              className='kotalog_card'
            >
              <div className='kotalog_card_bg' />
              <h3>Промышленное снабжение</h3>
              <a href=''>ТОВАРЫ</a>
            </div>
            <div
              style={{
                backgroundImage: 'url("./img/car-repair-garage 1.png")'
              }}
              className='kotalog_card'
            >
              <div className='kotalog_card_bg' />
              <h3>Промышленное снабжение</h3>
              <a href=''>ТОВАРЫ</a>
            </div>
            <div
              style={{
                backgroundImage: 'url("./img/car-repair-garage 1.png")'
              }}
              className='kotalog_card'
            >
              <div className='kotalog_card_bg' />
              <h3>Промышленное снабжение</h3>
              <a href=''>ТОВАРЫ</a>
            </div>
          </div>
        </div>
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
