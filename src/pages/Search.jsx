import { useEffect, useState } from 'react'
import PageButtons from '../components/PageButtons'
import Card from './category/Card'
import { Link, useSearch } from 'wouter'
import { ClimbingBoxLoader } from 'react-spinners'

export default function Search ({ api }) {
  const search = new URLSearchParams(useSearch())
  const page = +search.get('page') || 1
  const q = search.get('q') || ''
  const [{ products, lastPage = 1 }, setContent] = useState({})
  document.title = 'Поиск'

  useEffect(() => {
    (async () => {
      setContent({})
      const pages = await (await api.products(6)).search(q)
      setContent({
        products: await Promise.all(
          (await (await pages.page(page - 1)).array()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon(),
            brand_icon: await (await x.manufacturer()).icon() // TODO: replace with KOSOX
          }))
        ),
        lastPage: Math.max(1, await pages.totalPages())
      })
    })()
  }, [page, api, q])

  const PageLink = ({ innerClass, href, title }) => (
    <Link to={href}>
      <p className={innerClass}>{title}</p>
    </Link>
  )

  const PageStub = ({ title }) => <p>{title}</p>

  const Cards = () => (
    <div className='filterkotalog_cards'>
      {products.map((x) => (
        <Card
          key={x.id}
          title={x.name}
          image={x.icon}
          brandImage={x.brand_icon}
          page={`/product/${x.id}`}
        />
      ))}
      <div className='filterkotalog_cards_nav'>
        <div className='filterkotalog_cards_nav_flex'>
          <PageButtons
            currentPage={page}
            lastPage={lastPage}
            PageLink={PageLink}
            PageStub={PageStub}
          />
        </div>
        <div className='filterkotalog_cards_nav_btn'>
          <Link to='' />
        </div>
      </div>
    </div>
  )

  return (
    <main>
      <div
        style={{
          backgroundImage:
            'url("/img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")'
        }}
        className='header_main'
      >
        <div className='header_main_bg' />
        <div className='header_main_flex'>
          <h1>Результаты поиска</h1>
        </div>
      </div>
      <div className='filterkotalog'>
        <div className='filterkotalog_flex'>
          {products === undefined
            ? <div style={{ margin: '100px auto' }}><ClimbingBoxLoader color='#FFF' /></div>
            : <Cards />}
        </div>
      </div>
    </main>
  )
}
