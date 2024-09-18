import { useLocation } from 'wouter'

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
        <input tabindex={1} placeholder='ВАШЕ ФИО' type='text' name='name' />
        <input tabindex={2} placeholder="НАЗВАНИЕ КОМПАНИИ" type="text" name="company"/>
        <input tabindex={3} placeholder='ВАШ E-MAIL' type='text' name='email' />
        <input tabindex={4 }placeholder='ВАШ ТЕЛЕФОН' type='text' name='phone' />
        <textarea tabindex={5} placeholder='ВАШ ВОПРОС' type='textarea' name='description' />
        <div className="form_checkbox">
          <input type="checkbox" name="agree"/>
          <label htmlFor="agree" tabindex={6}>Отправляя форму я соглашаюсь с политикой конфиденциальности сайта kosox.info</label>
        </div>
        <button type='submit' tabindex={7}>ОТПРАВИТЬ</button>
      </form>
    </div>
  )
}
