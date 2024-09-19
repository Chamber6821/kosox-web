import { useRef } from 'react'
import { Link, useLocation, useSearch } from 'wouter'

export default function Header () {
  const params = new URLSearchParams(useSearch())
  const [location, setLocation] = useLocation()
  const searchInputRef = useRef()
  const search = () => setLocation(`/search?${new URLSearchParams({ q: searchInputRef.current.value })}`)
  return (
    <header className='header'>
      <nav className='navbar_top'>
        <div className='navbar_container'>
          <div className='navbar_logo'>
            <Link to='/'>
              <div className='logo'>
                <strong>KOSOX</strong>
              </div>
            </Link>
          </div>
          <ul className='navbar_top_menu'>
            <li className='navbar_top_menu_li'>
              <Link to='/about'>О компании</Link>
            </li>
            <li className='navbar_top_menu_li'>
              <Link to='/delivery-and-payment'>Доставка и Оплата</Link>
            </li>
            <li className='navbar_top_menu_li'>
              <Link to='/manufacturers'>Производители</Link>
            </li>
            <li className='navbar_top_menu_li'>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className='navbar_top_menu_li'>
              <Link to='/contacts'>Контакты</Link>
            </li>
          </ul>
          <div className='navbar_menu_container'>
            <div className='navbar_menu'>
              <a href='mailto:zakaz@kosox.ru'>zakaz@kosox.ru</a>
            </div>
            <div className='navbar_icon'>
              <a href='https://wa.me/79117111112' target='_blank' rel='noreferrer'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg'
                  alt='icon'
                />
              </a>
              <Link to='/'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg'
                  alt='icon'
                />
              </Link>
              <Link to='/'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg'
                  alt='icon'
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className='navbar_phone'>
        <div className='navbar_container'>
          <div className='navbar_phone_logo'>
            <Link to='/'>
              <div className='logo'>
                <strong>KOSOX</strong>
              </div>
            </Link>
          </div>
          <div className='navbar_phone_menu'>
            <i onClick={() => window.menuop()} className='bx bx-menu-alt-right' />
          </div>
          <div className='navbar_phone_right_menu'>
            <i
              onClick={() => window.menucl()}
              className='bx bxs-right-arrow-alt'
            />
            <ul className='navbar_top_menu'>
              <li className='navbar_top_menu_li'>
                <Link to='/delivery-and-payment'>Доставка и оплата</Link>
              </li>
              <li className='navbar_top_menu_li'>
                <Link to='/about'>О компании</Link>
              </li>
              <li className='navbar_top_menu_li'>
                <Link to='/contacts'>Контакты</Link>
              </li>
              <li className='navbar_top_menu_li'>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li className='navbar_top_menu_li'>
                <Link to='/'>Партнерам</Link>
              </li>
            </ul>
            <div className='navbar_phone_right_menu_mail'>
              <a href='mailto:'>zakaz@mgb-bearings.ru</a>
            </div>
            <div className='navbar_icon'>
              <a href='#0'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/whatsapp.svg'
                  alt=''
                />
              </a>
              <a href='#0'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/viber.svg'
                  alt=''
                />
              </a>
              <a href='#0'>
                <img
                  src='https://mgb-bearings.ru/wp-content/themes/astra-child/assets/image/telegram.svg'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className='navbar_down'>
        <div className='navbar_container'>
          <Link to='/catalog' className='red_border'>
            {window.innerWidth > 575 ? 'КАТАЛОГ ТОВАРОВ' : 'КАТАЛОГ'}
          </Link>
          <div className='navbar_down_inp'>
            <input
              ref={searchInputRef}
              placeholder='Введите наименование'
              defaultValue={(location === '/search' && params.get('q')) || ''}
              onKeyDown={e => e.key === 'Enter' && search()}
              type='text'
            />
            <img
              onClick={search}
              src='/img/find.svg'
              alt=''
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
