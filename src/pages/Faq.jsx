import FormSection from '../components/Sections/FormSection/FormSection'
import Banner from '../components/Sections/Banner/Banner'
import Attention from '../components/UI/Attention/Attention'
import SectionTitle from '../components/UI/SectionTitle/SectionTitle'
export default function Faq ({ api }) {
  document.title = 'FAQ'
  return (
    <main>
      <Banner breadcrumbs={[{ title: 'Главная', url: '/' }, { title: 'FAQ' }]}>
        Задать вопрос
      </Banner>
      <section className='section_page'>
        <SectionTitle style={{ textAlign: 'center' }}>
          Вопрос-ответ
        </SectionTitle>
        <div className='section_page_elemnts'>
          <div className='promishlenost_acc'>
            <div
              className='accordion content'
              id='accordionExample'
              style={{
                maxWidth: '1090px',
                width: '100%',
                padding: '0'
              }}
            >
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <img src='./img/accordeon/1.svg' alt='icon' />
                    <p>Возможен ли <Attention>самовывоз</Attention> заказанного товара?</p>
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Вы можете забрать свой заказ самостоятельно по следующему адресу: в Санкт-Петербурге, на Придорожной аллее, дом 8, литера А, помещение 620.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    <img src='./img/accordeon/3.svg' alt='icon' />
                    <p>Работаете ли вы с физическими <Attention>лицами</Attention>?</p>
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Конечно, наше сотрудничество распространяется и на индивидуальных предпринимателей, обладающих особым юридическим статусом.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    <img src='./img/accordeon/2.svg' alt='icon' />
                    <p>Доставляете ли Вы <Attention>подшипники</Attention> в другие города?</p>
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    В любые города России и СНГ!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormSection api={api} className='bg-form' />
    </main>
  )
}
