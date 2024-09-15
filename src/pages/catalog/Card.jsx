import { Link } from 'wouter'

export default function Card ({
  backgroundImage = '/img/car-repair-garage 1.png',
  title,
  page
}) {
  return (
    <Link to={page || ''}>
      <div
        style={{
          backgroundImage: `url('${backgroundImage}'), url('/img/default-card.png')`
        }}
        className='kotalog_card'
      >
        <div className='kotalog_card_bg' />
        <h3>{title}</h3>
      </div>
    </Link>
  )
}
