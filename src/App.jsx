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

export default function () {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/about-manufacturer' component={AboutManufacturer} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/category/:name' component={Category} />
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
