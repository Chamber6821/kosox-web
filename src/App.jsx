import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about-manufacturer' element={<AboutManufacturer />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/category' element={<Category />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/delivery-and-payment' element={<DeliveryAndPayment />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/manufacturers' element={<Manufacturers />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
