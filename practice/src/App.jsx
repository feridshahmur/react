import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientHeader from './layout/ClientHeader'
import MainHeader from './layout/ClientMainHeader'
import About from './pages/Client/Wishlist'
import Home from './pages/Client/Home'
import ProductDetails from './pages/Client/ProductDetail'
import Product from './pages/Client/Products'
import Wishlist from './pages/Client/Wishlist'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path='/' element = {<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='product/:id' element={<ProductDetails/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
