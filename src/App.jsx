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
import useApi from './api/useApi'

export default function () {
  const api = useApi('http://localhost/api/')
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/about-manufacturer' component={AboutManufacturer} />
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
        <Route path='/manufacturers' component={Manufacturers} />
        <Route path='/product' component={Product} />
      </Switch>
      <Footer />
    </>
  )
}
