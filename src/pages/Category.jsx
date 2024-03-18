export default function ({ params: { name } }) {
  return (
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
          <h1>{name}</h1>
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
                <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
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
                <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
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
  )
}
