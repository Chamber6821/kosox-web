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
import { useState } from 'react'
import ScrollTop from './components/ScrollTop'

export default function () {
  const [api] = useState(() => Api('http://localhost/api/'))
  return (
    <>
      <ScrollTop />
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/about-manufacturer/:brand'>
          {params => <AboutManufacturer params={params} api={api} />}
        </Route>
        <Route path='/catalog'>
          {params => <Catalog params={params} api={api} />}
        </Route>
        <Route path='/catalog/:superCategory'>
          {params => <Catalog params={params} api={api} />}
        </Route>
        <Route path='/category/:category'>
          {params => <Category params={params} api={api} />}
        </Route>
        <Route path='/contacts' component={Contacts} />
        <Route path='/delivery-and-payment' component={DeliveryAndPayment} />
        <Route path='/faq' component={Faq} />
        <Route path='/manufacturers'>
          {params => <Manufacturers params={params} api={api} />}
        </Route>
        <Route path='/product/:id'>
          {params => <Product params={params} api={api} />}
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
