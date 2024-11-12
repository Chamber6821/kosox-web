import { useEffect, useState } from "react";
import Cards from "./Cards";
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
  // const addedCategory = categoryName ? ` / ${categoryName}` : "";
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
          <h2 className="header_main_bread_crumbs">
            {categoryName ? (
              <>
                Главная / Каталог /<span>{` ${categoryName}`}</span>
              </>
            ) : (
              <>
                Главная /<span> Каталог</span>
              </>
            )}
          </h2>
          <h1 className="header_main_title">
            Каталог <span>товаров</span>
          </h1>
        </div>
      </div>
      <Cards api={api} category={id} />
      <FormSection api={api} className="bg-form" />
    </main>
  );
}
