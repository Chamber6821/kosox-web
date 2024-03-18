import Card from './Card'

export default function () {
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
          <h1>Каталог</h1>
        </div>
      </div>
      <div className='kotalog'>
        <div className='kotalog_flex'>
          <Card title='Промышленное снабжение' page='' />
          <Card title='Промышленное снабжение' page='' />
          <Card title='Промышленное снабжение' page='' />
          <Card title='Промышленное снабжение' page='' />
        </div>
      </div>
      <div
        style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        className='contact_form'
      >
        <div className='contact_form_flex'>
          <h2>Оставьте вашу заявку</h2>
          <input placeholder='Имя' type='text' name='name' />
          <input placeholder='Имя' type='text' name='surname' />
          <input placeholder='Имя' type='text' name='phone' />
          <button>Отправить</button>
        </div>
      </div>
    </main>
  )
}
