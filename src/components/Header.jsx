export default function () {
  return (
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
  )
}
