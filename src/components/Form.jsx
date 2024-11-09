import { useLocation } from 'wouter'
import Button from './UI/Button/Button'
import Attention from './UI/Attention/Attention'

export default function Form ({ api }) {
  const [location] = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
    const els = e.target.elements
    api.addFormRequest(location, {
      name: els.name.value,
      company: els.name.company.value,
      email: els.email.value,
      phone: els.phone.value,
      description: els.description.value
    })
  }
  return (
    <div id='contact_form' className='contact_form'>
      <h2>ПРИНИМАЕМ ЗАЯВКИ 24/7</h2>
      <form className='contact_form_flex' onSubmit={handleSubmit}>
        <input tabIndex={1} placeholder='ВАШЕ ФИО' type='text' name='name' />
        <input tabIndex={2} placeholder='НАЗВАНИЕ КОМПАНИИ' type='text' name='company' />
        <input tabIndex={3} placeholder='ВАШ E-MAIL' type='text' name='email' />
        <input tabIndex={4} placeholder='ВАШ ТЕЛЕФОН' type='text' name='phone' />
        <textarea tabIndex={5} placeholder='ВАШ ВОПРОС' type='textarea' name='description' />
        <div className='form_checkbox'>
          <input type='checkbox' name='agree' />
          <label htmlFor='agree' tabIndex={6}>Отправляя форму я соглашаюсь с <a href='/'><Attention>политикой конфедициальности</Attention></a> сайта <Attention>kosox.info</Attention></label>
        </div>
        <Button type='submit' tabIndex={7}>ОТПРАВИТЬ</Button>
      </form>
    </div>
  )
}
