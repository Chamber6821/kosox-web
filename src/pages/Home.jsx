import Form from '../components/Form'
import Reviews from '../components/Reviews'
import Cards from './catalog/Cards'

export default function Home ({ api }) {
  return (
    <main>
      <div
        className='main'
        style={{
          backgroundImage:
            'url("./img/a-close-up-of-a-robot-s-gear_188544-21931 1.png")'
        }}
      >
        <img src='./img/Rectangle1.png' alt='' />
        <div className='main_left'>
          <h1>
            Помощь в выборе <br />
            подшипников и промышленных товаров
          </h1>
          <h3>
            Более 60 тысяч образцов товаров <br />с гарантией ГОСТ/ТУ/ISO
            качества
          </h3>
          <a href='/catalog'>ВЫБРАТЬ ТОВАР</a>
        </div>
      </div>
      <Form api={api} />
      <Cards api={api} />
      <div className='promishlenost'>
        <div className='promishlenost_title'>
          <h6>Промышленность</h6>
        </div>
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
                  <img src='./img/mebel.svg' alt='' />
                  Мебельная промышленность
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Мебельная промышленность относится к наиболее быстро
                  развивающимся отраслям перерабатывающей промышленности. Это
                  сектор с очень высокой конкуренцией и разнообразием. Среди
                  продуктов, которые входят в мебельную отрасль, различают:
                  матрацы, стулья и кресла, мягкая мебель и спальни, элементы
                  мебели и все виды мебели для офиса, магазинов, кухонь и пр.
                  Мебельная промышленность является развитым рынком, но все же
                  демонстрирующим очень большой потенциал развития, который
                  генерируют, главным образом, компании, занимающиеся
                  производством мягкой мебели, автомобильных и самолетных
                  кресел, а также матрацев.
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
                  <img src='./img/micro.svg' alt='icon' />
                  Микроэлектроника и нанотехнологии
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Микроэлектроника и нанотехнологии - это области науки и
                  техники, строго необходимые для устойчивого развития стран с
                  развитой экономикой, включающие в себя все средства и методы
                  человеческой деятельности, необходимые для проектирования,
                  разработки и производства электронных и оптоэлектронных
                  устройств, устройств и интегрированных систем,
                  микроэлектроники.
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
                  <img src='./img/farma.svg' alt='icon' />
                  Фармацевтическая промышленность
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Всеми процессами, связанными с лекарственными средствами,
                  занимается фармацевтическая промышленность. Это отрасль
                  промышленности, которая непосредственно изучает,
                  разрабатывает, производит и распределяет лекарственные
                  препараты, необходимые для профилактики, диагностики и лечения
                  различного рода заболеваний.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingFour'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFour'
                  aria-expanded='false'
                  aria-controls='collapseFour'
                >
                  <img src='./img/stroy.svg' alt='icon' />
                  Промышленность строительных материалов
                </button>
              </h2>
              <div
                id='collapseFour'
                className='accordion-collapse collapse'
                aria-labelledby='headingFour'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Представляет собой комплекс производственных направлений,
                  предназначенных для изготовления материалов для жилищного,
                  гражданского, промышленного, сельскохозяйственного и иных
                  видов строительства. Именно эта отрасль обеспечивает
                  строительную индустрию основным потоком материальных ресурсов,
                  создавая базу для применения высокоэффективных материалов и
                  технологий, формируя при этом непрерывный рост объёмов
                  возводимых зданий и сооружений.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingFive'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseFive'
                  aria-expanded='false'
                  aria-controls='collapseFive'
                >
                  <img src='./img/electronica.svg' alt='icon' />
                  Электроэнергетика
                </button>
              </h2>
              <div
                id='collapseFive'
                className='accordion-collapse collapse'
                aria-labelledby='headingFive'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Электроэнергетика включает в себя производство, передачу и
                  потребление электроэнергии и является наиболее важной отраслью
                  энергетики. Электроэнергетика используется в быту,
                  промышленности и сельском хозяйстве и постоянно развивается.
                  Представить без электроэнергии нашу жизнь невозможно.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingSix'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseSix'
                  aria-expanded='false'
                  aria-controls='collapseSix'
                >
                  <img src='./img/dobyuvayu.svg' alt='icon' />
                  Добывающая промышленность
                </button>
              </h2>
              <div
                id='collapseSix'
                className='accordion-collapse collapse'
                aria-labelledby='headingSix'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Добывающая промышленность - отрасли промышленности,
                  занимающиеся добычей различного сырья и энергии. Добывающая
                  промышленность включает: получение электроэнергии; все отрасли
                  горнодобывающей промышленности; лесозаготовку, лесные
                  промыслы; охоту, рыболовство, добычу морского зверя. Иногда
                  лесозаготовку и лесные промыслы рассматривают вместе с
                  деревообработкой, выделяя лесную и деревообрабатывающую
                  промышленность. Основные предприятия добывающей
                  промышленности: в электроэнергетике, электростанции; в
                  горнодобывающей промышленности, каръеры, рудники, разрезы,
                  шахты, прииски; в лесозаготовках, леспромхозы; в охотничьем и
                  рыболовецком промыслах, охотничьи, рыболовецкие, зверобойные
                  хозяйства, артели.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingSeven'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseSeven'
                  aria-expanded='false'
                  aria-controls='collapseSeven'
                >
                  <img src='./img/metallurg.svg' alt='icon' />
                  Металлургия
                </button>
              </h2>
              <div
                id='collapseSeven'
                className='accordion-collapse collapse'
                aria-labelledby='headingSeven'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Область науки и техники, охватывающая процессы получения
                  металлов из руд или других видов сырья, а также процессы,
                  связанные с изменением химического состава, структуры и
                  свойств металлических сплавов и производством разнообразных
                  металлических изделий из них. В первоначальном, узком значении
                  — искусство извлечения металлов из руд. В настоящее время
                  металлургия является также отраслью промышленности.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingEight'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseEight'
                  aria-expanded='false'
                  aria-controls='collapseEight'
                >
                  <img src='./img/mashinostroeniye.svg' alt='icon' />
                  Машиностроение
                </button>
              </h2>
              <div
                id='collapseEight'
                className='accordion-collapse collapse'
                aria-labelledby='headingEight'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Машиностроение — это отрасль тяжелой промышленности,
                  производящая всевозможные машины, орудия, приборы, а также
                  предметы потребления и продукцию оборонного назначения.
                  Традиционно машиностроение делят на следующие группы отраслей:
                  тяжелое машиностроение, общее машиностроение, среднее
                  машиностроение, точное машиностроение, производство
                  металлических изделий и заготовок, ремонт машин и
                  оборудования.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingNine'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseNine'
                  aria-expanded='false'
                  aria-controls='collapseNine'
                >
                  <img src='./img/neft.svg' alt='icon' />
                  Нефтеперерабатывающая промышленность
                </button>
              </h2>
              <div
                id='collapseNine'
                className='accordion-collapse collapse'
                aria-labelledby='headingNine'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Отрасль экономики, занимающаяся добычей, переработкой,
                  транспортировкой, складированием и продажей полезного
                  природного ископаемого — нефти и сопутствующих нефтепродуктов.
                  К смежным отраслям промышленности относят: геофизику, бурение,
                  производство нефтегазового оборудования. Основу нефтяной
                  промышленности составляют вертикально-интегрированные нефтяные
                  компании.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTen'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTen'
                  aria-expanded='false'
                  aria-controls='collapseTen'
                >
                  <img src='./img/himicheskaya.svg' alt='icon' />
                  Химическая промышленность
                </button>
              </h2>
              <div
                id='collapseTen'
                className='accordion-collapse collapse'
                aria-labelledby='headingTen'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Химическая промышленность обеспечивает множество отраслей
                  новыми исходными продуктами и материалами. Особенно влияет
                  химическая индустрия на развитие строительства,
                  автомобилестроения и сельского хозяйства. Данная отрасль
                  является одной из самых активно продвигающихся на мировом
                  рынке, во многом находится на уровне с машиностроением.
                  Химический комплекс обладает высокой наукоемкостью.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingEleven'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseEleven'
                  aria-expanded='false'
                  aria-controls='collapseEleven'
                >
                  <img src='./img/bumazhnaya.svg' alt='icon' />
                  Целлюлозно-бумажная промышленность
                </button>
              </h2>
              <div
                id='collapseEleven'
                className='accordion-collapse collapse'
                aria-labelledby='headingEleven'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Целлюлозно-бумажная промышленность состоит из предприятий,
                  которые в качестве сырья для производства готовой продукции
                  используют древесину, растения, отходы бумаги и картона,
                  производя из них целлюлозу, бумагу, картон и другие продукты
                  на основе растительных полимеров.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwelve'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwelve'
                  aria-expanded='false'
                  aria-controls='collapseTwelve'
                >
                  <img src='./img/legkaya.svg' alt='icon' />
                  Легкая промышленность
                </button>
              </h2>
              <div
                id='collapseTwelve'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwelve'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Одной из основных отраслей промышленного комплекса, которая
                  производит товары народного потребления, является лёгкая
                  промышленность. Именно она выпускает продукцию для населения,
                  в том числе сырьё и вспомогательные материалы для других
                  отраслей промышленности, к примеру, пищевой или
                  машиностроения.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThirteen'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThirteen'
                  aria-expanded='false'
                  aria-controls='collapseThirteen'
                >
                  <img src='./img/pishevaya.svg' alt='icon' />
                  Пищевая промышленность
                </button>
              </h2>
              <div
                id='collapseThirteen'
                className='accordion-collapse collapse'
                aria-labelledby='headingThirteen'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  Пищевая промышленность — группа промышленных отраслей,
                  производящих пищевые продукты в готовом виде или в виде
                  полуфабрикатов, а также напитки, табачные изделия .В системе
                  агропромышленного комплекса пищевая промышленность тесно
                  связана с сельским хозяйством как поставщиком сырья и с
                  торговлей. Часть отраслей пищевой промышленности тяготеет к
                  сырьевым районам, другая часть — к районам потребления. В
                  Международной стандартной отраслевой классификации пищевые
                  производства отнесены к разделу обрабатывающей промышленности,
                  самостоятельными подразделами в которой выделены производство
                  пищевых продуктов, производство напитков и производство
                  табачных изделий.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about_company'>
        <div
          className='about_company_card'
          style={{ backgroundImage: 'url("./img/Rectangle 2.png")' }}
        >
          <h6>О компании</h6>
          <h3>
            Наша фирма "KOSOX" на рынке уже более 10 лет и мы знаем, что нужно
            нашим покупателям лучше всех других. Предоставляя различные
            комплектующие для промышленности и другие товары, мы также даем
            лучший сервис и наилучшие условия сотрудничества.
          </h3>
          <a href='/about' className='red_border'>
            Читать подробнее
          </a>
        </div>
      </div>
      <div className='primushestva_company'>
        <div className='main_left'>
          <h6>Преимущества компании</h6>
        </div>
        <div className='primushestva_company_cards'>
          <div className='primushestva_company_cards_card'>
            <div className='primushestva_company_cards_card_img'>
              <img src='./img/prices.svg' alt='icon' />
            </div>
            <div className='primushestva_company_cards_card_title'>
              <h3>Отличные цены </h3>
              <h4>У нас одни из самых минимальных цен на рынке</h4>
            </div>
          </div>
          <div className='primushestva_company_cards_card'>
            <div className='primushestva_company_cards_card_img'>
              <img src='./img/delivery.svg' alt='icon' />
            </div>
            <div className='primushestva_company_cards_card_title'>
              <h3>Доступность</h3>
              <h4>Доставляем товары по всей Российской Федерации</h4>
            </div>
          </div>
          <div className='primushestva_company_cards_card'>
            <div className='primushestva_company_cards_card_img'>
              <img src='./img/speed.svg' alt='icon' />
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
              <img src='./img/quality.svg' alt='' />
            </div>
            <div className='primushestva_company_cards_card_title'>
              <h3>Гарантия качества</h3>
              <h4>Все наши изделия с гарантией ГОСТ/ТУ/ISO качества</h4>
            </div>
          </div>
          <div className='primushestva_company_cards_card'>
            <div className='primushestva_company_cards_card_img'>
              <img src='./img/postavshik.svg' alt='' />
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
              <img src='./img/clients.svg' alt='' />
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
      </div>
      <div className='how_weare_working'>
        <div className='main_left'>
          <h6>Как мы работаем?</h6>
        </div>
        <div className='how_weare_working_cards'>
          <div className='how_weare_working_cards_card'>
            <div className='how_weare_working_cards_card_num'>
              <span>01</span>
            </div>
            <div className='how_weare_working_cards_card_text'>
              <h3>Вы звоните или оставляете заявку</h3>
            </div>
          </div>
          <div className='how_weare_working_cards_card'>
            <div className='how_weare_working_cards_card_num'>
              <span>02</span>
            </div>
            <div className='how_weare_working_cards_card_text'>
              <h3>Мы формируем ваш заказ</h3>
            </div>
          </div>
          <div className='how_weare_working_cards_card'>
            <div className='how_weare_working_cards_card_num'>
              <span>03</span>
            </div>
            <div className='how_weare_working_cards_card_text'>
              <h3>Вы оплачиваете выставленный вам счёт</h3>
            </div>
          </div>
          <div className='how_weare_working_cards_card'>
            <div className='how_weare_working_cards_card_num'>
              <span>04</span>
            </div>
            <div className='how_weare_working_cards_card_text'>
              <h3>В оговоренные сроки осуществляется отгрузка</h3>
            </div>
          </div>
        </div>
        <a href='#contact_form' className='red_border'>
          Оставить заявку
        </a>
      </div>
      <div className='reviews'>
        <div className='reviews_title'>
          <h6>Отзывы</h6>
        </div>
        <div className='reviews_swiper'>
          <div className='reviews_swiper_back' />
          <Reviews />
        </div>
      </div>
      <div className='map'>
        <iframe
          src='https://yandex.by/map-widget/v1/profile?ll=30.352017%2C60.058219&z=16.91'
          width='560'
          height='400'
          frameBorder='1'
          allowFullscreen='true'
          style={{ position: 'relative' }}
        />
      </div>
    </main>
  )
}
