/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

import { useEffect, useState } from 'react'

/**
 *
 * @param {props} props
 * @returns
 */
export default function ({ api, params: { id } }) {
  const [{ product = {}, brand = {} }, setContent] = useState({})

  useEffect(() => {
    ;(async () => {
      const product = await (await api.products()).withId(id)
      const brand = await product.brand()
      setContent({
        product: {
          icon: await product.icon(),
          name: await product.name(),
          description: await product.description()
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
            onclick='productdesc()'
            className='product_page_description_menu_title'
          >
            <img className='img_texteditor' src='./img/texteditor.svg' alt='' />
            <h2 className='h2_texteditor'>Описание</h2>
          </div>
          <div
            onclick='productharakt()'
            className='product_page_description_menu_title2'
          >
            <img className='img_searchbox' src='./img/searchbox.svg' alt='' />
            <h2 className='h2_searchbox'>Характеристики</h2>
          </div>
        </div>
        <div className='produce_page_description_text content'>
          <p>{product.description}</p>
          <a href=''>Заказать данный товар</a>
        </div>
        <div className='produce_page_description_text2'>
          <table>
            <tbody>
              <tr>
                <td>Длина L, мм.</td>
                <td>405</td>
              </tr>
              <tr>
                <td>Цена деления шкалы, кг/м3</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>MGB</td>
              </tr>
            </tbody>
          </table>
          <a href=''>Заказать данный товар</a>
        </div>
      </div>
    </main>
  )
}
