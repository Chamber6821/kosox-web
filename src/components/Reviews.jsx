import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Reviews () {
  const revie = (author, opinion, starAmount, imgUrl) => ({ author, opinion, starAmount, imgUrl })
  const reviews = [
    revie('ООО “Компания по продаже”',
      'Заказывали конические однорядные подшипники, все понравилось. Нужна была крупная оптовая партия и в сжатые сроки - все доставили вовремя! Сервис понравился, будем обращаться еще.', 5, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 1”',
      'Делал большой оптовый заказ, еще и сборный - ребята все собрали, доставили как надо и со сроками полный порядок. Очень круто, буду работать и дальше.', 5, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 2”',
      'С компанией KOSOX работаем уже давно - качество всегда на уровне и цены приемлемые, рекомендую.', 5, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 3”',
      'Заказывали первый раз, договорились про консультацию. По телефону все очень доходчиво рассказали - видно что в компании работают люди со знанием дела!', 4, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 4”',
      'Отличный сервис, приятные условия, доставка вовремя - все просто замечательно, благодарю KOSOX за сотрудничество.', 5, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 5”',
      'На производстве понадобились Станки ЧПУ. Долго думали какого производителя выбрать и в итоге пришли к решению заказать у KOSOX. Поставили все в лучшем виде, очень довольны!', 4, '/img/reviewLogo.png'),
    revie('ООО “Компания по продаже 6”',
      'По соотношению цены и качества думаю лучше компанию не найти. Работать буду продолжать, все устраивает.', 4, '/img/reviewLogo.png'),
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
          maxWidth: '100dvw',
          backgroundColor: '#000',
          height: "auto",
          paddingBottom: 24
        }}
        modules={[Pagination]}
        initialSlide={3}
        pagination={{ clickable: true, el: '.reviews-pagination' }}
        slidesPerView='auto'
        centeredSlides
        spaceBetween={30}
        grabCursor
        loop
        autoHeight={true}
        speed={1000}
      >
        {reviews.map(x =>
          <SwiperSlide
            key={x.author}
            style={{
              maxWidth: '300px',
              padding: '40px 20px',
              borderRadius: '15px',
              height: 'initial',
              backgroundColor: '#0D0F10',
              filter: 'blur(5px)'
            }}
          >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <img src={x.imgUrl} alt='icon' />
              <div style={{display: "flex", gap: 8}}>
                {[...Array(x.starAmount)].map((_, id) => <img key={id} src="/img/starReview.svg" style={{width: 25, height: 25}} alt="star"/>)}
              </div>
            </div>
            <h3 style={{ marginTop: '15px' }}>{x.author}</h3>
            <h4 style={{ textAlign: 'left', marginTop: '40px' }}>{x.opinion}</h4>
          </SwiperSlide>
        )}
      </Swiper>
      <div style={{ width: 'fit-content', margin: 'auto', marginTop: '16px' }} className='reviews-pagination' />
    </div>
  )
}
