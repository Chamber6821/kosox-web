import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Reviews () {
  const revie = (author, opinion) => ({ author, opinion })
  const reviews = [
    revie('Александр Борисов',
      'Заказывали конические однорядные подшипники, все понравилось. Нужна была крупная оптовая партия и в сжатые сроки - все доставили вовремя! Сервис понравился, будем обращаться еще.'),
    revie('Дмитрий Бородин',
      'Делал большой оптовый заказ, еще и сборный - ребята все собрали, доставили как надо и со сроками полный порядок. Очень круто, буду работать и дальше.'),
    revie('Тимур Киселев',
      'С компанией KOSOX работаем уже давно - качество всегда на уровне и цены приемлемые, рекомендую.'),
    revie('Евгений Островерхий',
      'Заказывали первый раз, договорились про консультацию. По телефону все очень доходчиво рассказали - видно что в компании работают люди со знанием дела!'),
    revie('Алексей Верущенко',
      'Отличный сервис, приятные условия, доставка вовремя - все просто замечательно, благодарю KOSOX за сотрудничество.'),
    revie('Михаил Каштанов',
      'На производстве понадобились Станки ЧПУ. Долго думали какого производителя выбрать и в итоге пришли к решению заказать у KOSOX. Поставили все в лучшем виде, очень довольны!'),
    revie('Владимир Козловский',
      'По соотношению цены и качества думаю лучше компанию не найти. Работать буду продолжать, все устраивает.')
  ]
  return (
    <div
      style={{
        '--swiper-theme-color': '#2E2F8C',
        '--swiper-pagination-bullet-size': '20px',
        '--swiper-pagination-bullet-inactive-color': 'rgb(72, 72, 72)'
      }}
    >
      <Swiper
        style={{
          position: 'relative',
          maxWidth: '100dvw'
        }}
        modules={[Pagination]}
        initialSlide={3}
        pagination={{ clickable: true, el: '.reviews-pagination' }}
        slidesPerView='auto'
        centeredSlides
        spaceBetween={30}
        grabCursor
        loop
      >
        {reviews.map(x =>
          <SwiperSlide
            key={x.author}
            style={{
              maxWidth: '300px',
              padding: '40px 20px',
              borderRadius: '15px'
            }}
          >
            <img src='/img/sky.svg' alt='icon' />
            <h3 style={{ marginTop: '15px' }}>{x.author}</h3>
            <h4 style={{ textAlign: 'left', marginTop: '40px' }}>{x.opinion}</h4>
          </SwiperSlide>
        )}
      </Swiper>
      <div style={{ width: 'fit-content', margin: 'auto', marginTop: '16px' }} className='reviews-pagination' />
    </div>
  )
}
