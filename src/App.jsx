import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import AboutUs from './features/AboutUs/AboutUs'
import ContactUs from './features/ContactUs/ContactUs'
import Products from './features/Products/Products'
import './App.css'
import Checkout from './features/Cart/components/Checkout'
import catIcon from './assets/curious-cat.png'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = 'CuriousCat'

    const changeFavicon = (src) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = src;
    };

    changeFavicon(catIcon);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
