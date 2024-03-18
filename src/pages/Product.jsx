export default function () {
  return (
    <main>
      <div className='product_page content'>
        <div className='product_page_about '>
          <div className='product_page_about_img'>
            <div className='product_page_about_img_bg' />
          </div>
          <div className='product_page_about_title'>
            <h1>Ареометр для антифриза FFH</h1>
            <div className='product_page_about_title_fenom'>
              <h3>Производитель :</h3>
              <img src='./img/logo-150x67-11.png' alt='' />
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
          <p>
            В нашей компании Вы можете купить MGB — Бесшпоночная зажимная муфта
            (втулка) BK71 150×200 оптом и в розницу, а так же другие
            комплектующим, представленные в нашем каталоге. Тип KLDB, RCK71,
            KTR200 относится к быстрозажимным типам. Их производят для установки
            на вал электродвигателя особой плотности. Соединение при этом
            безлюфтовое. Не требует применения особых инструментов. Монтаж
            проводится за несколько минут. Простота использования заключается в
            том, что втулки не образуют зазоров из-за отсутствия шлиц. Основным
            элементом служат разрезные конусы. При стягивании крепежных
            элементов они плотно стягиваются. Во время данного действия,
            происходит радиальная деформация и внутреннее кольцо уменьшается.
            Изделие создается из углеродистой стали, что обеспечивает ему
            высокую прочность и долговечность. Втулки упрощают техническое
            обслуживание всего механизма.
          </p>
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
