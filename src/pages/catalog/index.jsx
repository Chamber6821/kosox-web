import { useEffect, useState } from "react";
import Cards from "./Cards";
import Form from "../../components/Form";

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function Catalog({ api, params: { superCategory } }) {
  const [{ categoryName = "" }, setContent] = useState({});
  useEffect(() => {
    (async () => {
      const superCategories = await api.superCategories();
      const scEntity = await superCategories.withId(superCategory);
      setContent({
        categoryName: superCategory && (await scEntity.name()),
      });
    })();
  }, [api, superCategory]);
  return (
    <main>
      <div
        style={{
          backgroundImage:
            'url("/img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")',
        }}
        className="header_main"
      >
        <div className="header_main_bg" />
        <div className="header_main_flex">
          <h1>Каталог</h1>
          {superCategory && (
            <>
              <h1>/</h1>
              <h1>{categoryName}</h1>
            </>
          )}
        </div>
      </div>
      <Cards api={api} superCategory={superCategory} />
      <Form api={api} />
    </main>
  );
}
