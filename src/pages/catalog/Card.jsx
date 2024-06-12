import { Link } from 'wouter'

export default function Card ({
  backgroundImage = '/img/car-repair-garage 1.png',
  title,
  page
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
      className='kotalog_card'
    >
      <div className='kotalog_card_bg' />
      <h3>{title}</h3>
      <Link to={page}>ТОВАРЫ</Link>
    </div>
  )
}
