import { Link } from 'wouter'

export default function Card ({
  image = '/img/Электромагнитные_муфты_(изображени_для_товарной_категории)1.png',
  brandImage = '/img/logo-150x67-12.png',
  title,
  page
}) {
  return (
    <Link to={page}>
      <div className='filterkotalog_card'>
        <div className='filterkotalog_card_img'>
          <div className='filterkotalog_card_img_bg' />
          <img
            alt='product'
            style={{ objectFit: 'cover', height: 'inherit' }}
            src={image}
            onError={e => { e.target.src = '/img/default-card.png' }}
          />
        </div>
        <div className='filterkotalog_card_title'>
          <h2>{title}</h2>
          <img
            alt='product brand'
            style={{
              objectFit: 'cover',
              maxWidth: '100px',
              maxHeight: '100px',
              border: '0px solid transparent',
              background: '#fff'

            }}
            src={brandImage}
          />
        </div>
      </div>
    </Link>
  )
}
