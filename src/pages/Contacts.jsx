export default function Contacts () {
  document.title = 'Контакты'
  return (
    <main>
      <div
        style={{
          backgroundImage:
            'url("./img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")'
        }}
        className='header_main'
      >
        <div className='header_main_bg' />
        <div className='header_main_flex'>
          <h1>Контакы</h1>
        </div>
      </div>
      <section className='contact_page'>
        <div className='contact_page_about'>
          <h2>Мы открыты для вас!</h2>
          <h3>
            Вы можете связаться с нами там, где вам угодно. Мы готовы
            подстраиваться под вас
          </h3>
          <h3 style={{ color: '#f00' }}>
            График работы: Понедельник — Пятница,
            с 09:00 до 18:00 по МСК
          </h3>
          <div className='contact_page_about_phone'>
            <img src='./img/phone.svg' alt='' />
            <div className='contact_page_about_phone_text'>
              <a href='tel:+88124555155'>
                <h3>+8 (812) 455-51-55</h3>
              </a>
            </div>
          </div>
          <div className='contact_page_about_phone'>
            <img src='./img/location.svg' alt='' />
            <div className='contact_page_about_location_text'>
              <a href='#0'>
                <h3>
                  г. Санкт-Петербург, Придорожная аллея, д. 8, лит. А, ПОМЕЩ. 620
                </h3>
              </a>
            </div>
          </div>
          <div className='contact_page_about_phone'>
            <img src='./img/mail.svg' alt='' />
            <div className='contact_page_about_mail_text'>
              <a href='mailto:zakaz@kosox.ru'>
                <h3>zakaz@kosox.ru</h3>
              </a>
            </div>
          </div>
          <h3 style={{ color: '#f00' }}>
            Принимаем заявки 24/7
          </h3>
        </div>
        <div className='contact_page_post'>
          <h6>Отправьте нам сообщение</h6>
          <input
            placeholder='Имя'
            name='name'
            style={{ marginTop: 36 }}
            type='text'
          />
          <input placeholder='Фамилия' name='surname' type='text' />
          <textarea
            placeholder='Сообщение'
            name='massage'
            className='text_inp'
            cols={30}
            rows={10}
            defaultValue=''
          />
          <button>Отправить</button>
          <h5>
            Отправляя форму вы соглашаетесь на обработку персональных данных в
            соответствии с законом № 152-ФЗ «О персональных данных» от
            27.07.2006 и принимаете условияпользовательского соглашения.
          </h5>
        </div>
      </section>
      <div className='map'>
        <iframe
          title='We are here'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.673838597978!2d69.29343457559364!3d41.27243700311816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5562e10029b%3A0x9d613287cf9847d0!2z0JzQuNGA0LDQsdCw0LTRgdC60LjQuSDRgNCw0LnQvtC9LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1702197977295!5m2!1sru!2s'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </main>
  )
}
