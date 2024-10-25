import FormSection from '../components/Sections/FormSection/FormSection'
import Banner from '../components/Sections/Banner/Banner'
import Attention from '../components/UI/Attention/Attention'

export default function Contacts ({ api }) {
  document.title = 'Контакты'
  return (
    <main>
      <Banner breadcrumbs={[{ url: '/', title: 'Главная' }, { title: 'Контакты' }]}>
        Связться с <Attention>KOSOX</Attention>
      </Banner>
      <FormSection api={api} className='bg-form' />
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
