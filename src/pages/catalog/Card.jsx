import { Link } from 'wouter'

export default function Card ({
  backgroundImage = '/img/car-repair-garage 1.png',
  title,
  page
}) {
  return (
    <Link to={page || ''} className='kotalog_card'>
      <img src={backgroundImage} alt='bg' />
      <h3>{title}</h3>
    </Link>
  )
}
