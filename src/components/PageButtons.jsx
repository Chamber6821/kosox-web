export default function PageButtons ({ currentPage, lastPage, PageLink, PageStub }) {
  // Создаем массив страниц для внутренней логики
  // const pages = [...Array(lastPage).keys()].map((x) => x + 1)

  // Проверяем, нужно ли отображать кнопку "Далее"
  const showNextButton = currentPage < lastPage

  return (
    <>
      {/* Отображаем только кнопку "Далее" */}
      {showNextButton && (
        <PageLink
          // className="button_next_page_link"
          innerClass='next_page_link' //   button_next_page_link
          href={`?page=${currentPage + 1}`} // Переход на следующую страницу
          title='Далее'
        >
          ПОКАЗАТЬ ЕЩЕ
        </PageLink>
      )}
    </>
  )
}
