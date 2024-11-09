import { useState, useEffect } from 'react'
import styles from './Footer.module.css'
import { Link } from 'wouter'

export default function Footer ({ api, category = undefined }) {
  const [{ categories = [] }, setContent] = useState({})
  useEffect(() => {
    (async () => {
      const categories = await api.categories()
      const scEntity = await categories.withId(category)
      const categoriesToRender = category
        ? await scEntity.subcategories()
        : categories
      setContent({
        categories: await Promise.all(
          (await categoriesToRender.array()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        )
      })
    })()
  }, [api, category])

  return (
    <footer className={styles.footer}>
      <div className={`cntr ${styles.footerInner}`}>
        <div className={styles.footerBlock}>
          <h6 className={styles.footerName}>Меню</h6>
          <div className={styles.footerNav}>
            <Link className={styles.footerLink} to='/about'>
              О компании
            </Link>
            <Link className={styles.footerLink} to='/catalog'>
              Каталог
            </Link>
            <Link className={styles.footerLink} to='/delivery-and-payment'>
              Доставка и оплата
            </Link>
            <Link className={styles.footerLink} to='/manufacturers'>
              Партнерам
            </Link>
            <Link className={styles.footerLink} to='/contacts'>
              Контакты
            </Link>
            <Link className={styles.footerLink} to='/faq'>
              FAQ
            </Link>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <h6 className={styles.footerName}>Контакты</h6>
          <div className={styles.footerNav}>
            <Link className={styles.footerLink} to='https:/telegram.im/@kosox78'>
              Telegram (@kosox78)
            </Link>
            <Link className={styles.footerLink} to='https://api.whatsapp.com/send?phone=79818800222'>
              Whatsapp (+79818800222)
            </Link>
            <Link className={styles.footerLink} to='mailto:zakaz@kosox.ru'>
              zakaz@kosox.ru
            </Link>
            <Link className={styles.footerLink} to='+88124555155'>
              +7 (812) 455-51-55
            </Link>
          </div>
        </div>
        <div className={`${styles.footerBlock} ${styles.footerCatalog}`}>
          <h6 className={styles.footerName}>Каталог</h6>
          <div className={styles.footerCols}>
            <div className={styles.footerNav}>
              {categories.slice(0, Math.ceil(categories.length / 2)).map(category => (
                <Link className={styles.footerLink} href='/' key={category.id}>{category.name}</Link>
              ))}
            </div>
            <div className={styles.footerNav}>
              {categories.slice(Math.ceil(categories.length / 1.6)).map(category => (
                <Link className={styles.footerLink} href='/' key={category.id}>{category.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footerUnderneath} cntr`}>
        <span className={styles.footerCopyright}>© 2023 Подшипники оптом и в розницу.</span>
        <span className={styles.footerCreator}>Разработано WOW</span>
        <span className={styles.footerDesc}>Полный спектр промышленного снабжения. Обращаем ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации, стоимости продукции и условий обращайтесь к менеджерам.
          Вся информация на сайте – собственность интернет-магазина mgb-bearings.ru. Публикация информации с сайта mgb-bearings.ru без разрешения запрещена. Все права защищены. Вы принимаете условия политики конфиденциальности и пользовательского соглашения каждый раз, когда оставляете свои данные в любой форме обратной связи на сайте mgb-bearings.ru.
        </span>
      </div>
    </footer>
  )
}
