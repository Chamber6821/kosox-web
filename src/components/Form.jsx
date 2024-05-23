import { useLocation } from "wouter";

export default function Form({ api }) {
  const [location, _] = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const els = e.target.elements;
    api.addFormRequest(location, {
      name: els.name.value,
      email: els.email.value,
      phone: els.phone.value,
      description: els.description.value,
    });
  };
  return (
    <div id="contact_form" className="contact_form">
      <form className="contact_form_flex" onSubmit={handleSubmit}>
        <h2>Оставьте вашу заявку</h2>
        <input placeholder="Ваше имя" type="text" name="name" />
        <input placeholder="Ваш e-mail" type="text" name="email" />
        <input placeholder="Ваш телефон" type="text" name="phone" />
        <input placeholder="Пожелание" type="textarea" name="description" />
        <button role="submit">Отправить</button>
      </form>
    </div>
  );
}
