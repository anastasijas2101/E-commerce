import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import AboutUs from './features/AboutUs/AboutUs'
import ContactUs from './features/ContactUs/ContactUs'
import Products from './features/Products/Products'
import HowToOrder from './features/HowToOrder/HowToOrder'
import './App.css'
import Checkout from './features/Cart/components/Checkout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/howToOrder' element={<HowToOrder />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
