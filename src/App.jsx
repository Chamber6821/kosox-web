import { Route, Switch } from 'wouter'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  About,
  AboutManufacturer,
  Catalog,
  Category,
  Contacts,
  DeliveryAndPayment,
  Faq,
  Home,
  Manufacturers,
  Product
} from './pages'
import Api from './api/Api'
import { useEffect, useState } from 'react'
import ScrollTop from './components/ScrollTop'
import Search from './pages/Search'
import { CityProvider } from './api/City'

export default function App () {
  console.log(process.env.REACT_APP_API_BASE)
  const [api] = useState(() => Api(process.env.REACT_APP_API_BASE))
  const domainLevels = window.location.hostname.split('.').reverse()
  const city = domainLevels[2]
  useEffect(() => {
    (async () => {
      if (city === undefined) {
        const response = await fetch('http://ip-api.com/json/?fields=city,country')
        const { city: realCity, country } = await response.json()
        const city = country === 'Russia' ? realCity : 'St Petersburg'
        const l = window.location
        window.location = `${l.protocol}//${city.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')
          }.${l.host}${l.pathname}${l.search} `
      }
    })()
  }, [city])
  return (
    <CityProvider>
      <ScrollTop />
      <Header />
      <Switch>
        <Route path='/'>{(params) => <Home params={params} api={api} />}</Route>
        <Route path='/about' component={About} />
        <Route path='/about-manufacturer/:id'>
          {(params) => <AboutManufacturer params={params} api={api} />}
        </Route>
        <Route path='/catalog'>
          {(params) => <Catalog params={params} api={api} />}
        </Route>
        <Route path='/catalog/:id'>
          {(params) => <Catalog params={params} api={api} />}
        </Route>
        <Route path='/category/:id'>
          {(params) => <Category params={params} api={api} />}
        </Route>
        <Route path='/contacts' component={Contacts} />
        <Route path='/delivery-and-payment' component={DeliveryAndPayment} />
        <Route path='/faq'>{() => <Faq api={api} />}</Route>
        <Route path='/manufacturers'>
          {(params) => <Manufacturers params={params} api={api} />}
        </Route>
        <Route path='/product/:id'>
          {(params) => <Product params={params} api={api} />}
        </Route>
        <Route path='/search'>{() => <Search api={api} />}</Route>
      </Switch>
      <Footer />
    </CityProvider>
  )
}
