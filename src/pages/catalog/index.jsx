import { useEffect, useState } from 'react'
import Cards from './Cards'
// import Form from '../../components/Form'
import FormSection from "../../components/Sections/FormSection/FormSection";

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function Catalog({ api, params: { id } }) {
  const [{ categoryName = "" }, setContent] = useState({});
  document.title = categoryName === "" ? "Каталог" : `Каталог: ${categoryName}`;
  useEffect(() => {
    (async () => {
      const categories = await api.categories();
      const scEntity = await categories.withId(id);
      setContent({
        categoryName: id && (await scEntity.name()),
      });
    })();
  }, [api, id]);
  return (
    <main>
      <div
        style={{
          backgroundImage: 'url("/img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")',
        }}
        className="header_main"
      >
        <div className="header_main_bg" />
        <div className="header_main_flex">
          <h1>Каталог</h1>
          {id && (
            <>
              <h1>/</h1>
              <h1>{categoryName}</h1>
            </>
          )}
        </div>
      </div>
      <Cards api={api} category={id} />

       <FormSection api={api} className='bg-form' />
    </main>
  );
}
