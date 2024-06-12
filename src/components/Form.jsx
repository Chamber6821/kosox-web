import { useLocation } from 'wouter'

import './Form.css'

export default function Form ({ api }) {
  const [location] = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
    const els = e.target.elements
    api.addFormRequest(location, {
      name: els.name.value,
      email: els.email.value,
      phone: els.phone.value,
      description: els.description.value
    })
  }
  return (
    <div id='contact_form' className='contact_form'>
      <form className='contact_form_flex' onSubmit={handleSubmit}>
        <h2>Оставьте вашу заявку</h2>
        <input placeholder='Ваше имя' type='text' name='name' />
        <input placeholder='Ваш e-mail' type='text' name='email' />
        <input placeholder='Ваш телефон' type='text' name='phone' />
        <input placeholder='Пожелание' type='textarea' name='description' />
        <button type='submit'>Отправить</button>
      </form>
    </div>
  )
}
