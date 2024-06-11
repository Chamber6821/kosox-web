/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

import { useEffect, useState } from 'react'
import Form from '../components/Form'

/**
 *
 * @param {props} props
 * @returns
 */
export default function ({ api, params: { id } }) {
  const [tab, setTab] = useState('description')
  const [{ product = {}, brand = {} }, setContent] = useState({})
  document.title = `${product.name}`

  useEffect(() => {
    (async () => {
      const product = await (await api.products()).withId(id)
      const brand = await product.manufacturer() // TODO: replace with KOSOX
      setContent({
        product: {
          icon: await product.icon(),
          name: await product.name(),
          description: await product.description(),
          parameters: await Promise.all(
            (await product.parameters()).map(async (x) => [
              await x.key(),
              await x.value()
            ])
          )
        },
        brand: {
          icon: await brand.icon(),
          name: await brand.name()
        }
      })
    })()
  }, [id])
  return (
    <main>
      <div className='product_page content'>
        <div className='product_page_about '>
          <div
            className='product_page_about_img'
            style={{ backgroundImage: `url(${product.icon})` }}
          >
            <div className='product_page_about_img_bg' />
          </div>
          <div className='product_page_about_title'>
            <h1>{product.name}</h1>
            <div className='product_page_about_title_fenom'>
              <h3>Производитель:</h3>
              {brand.icon ? <img src={brand.icon} /> : <h3>{brand.name}</h3>}
            </div>
            <a href=''>Заказать</a>
          </div>
        </div>
      </div>
      <div className='product_page_description'>
        <div className='product_page_description_menu'>
          <div
            onClick={() => setTab('description')}
            className={
              { description: 'product_page_description_menu_title' }[tab] ||
              'product_page_description_menu_title2'
            }
          >
            <img className='img_texteditor' src='./img/texteditor.svg' alt='' />
            <h2 className='h2_texteditor'>Описание</h2>
          </div>
          <div
            onClick={() => setTab('parameters')}
            className={
              { parameters: 'product_page_description_menu_title' }[tab] ||
              'product_page_description_menu_title2'
            }
          >
            <img className='img_searchbox' src='./img/searchbox.svg' alt='' />
            <h2 className='h2_searchbox'>Характеристики</h2>
          </div>
        </div>
        <div
          className={`content ${{ description: 'produce_page_description_text' }[tab] ||
            'produce_page_description_text2'
            }`}
        >
          <p>{product.description}</p>
          <a href=''>Заказать данный товар</a>
        </div>
        <div
          className={
            { parameters: 'produce_page_description_text' }[tab] ||
            'produce_page_description_text2'
          }
        >
          <table>
            <tbody>
              {product.parameters?.map(([key, val]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href=''>Заказать данный товар</a>
        </div>
      </div>
      <Form api={api} />
    </main>
  )
}
