import { Link } from 'wouter'

export default function ({
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
          <img style={{ objectFit: 'cover', height: 'inherit' }} src={image} />
        </div>
        <div className='filterkotalog_card_title'>
          <h2>{title}</h2>
          <img
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
