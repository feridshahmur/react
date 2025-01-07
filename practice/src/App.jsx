import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientHeader from './layout/ClientHeader'
import MainHeader from './layout/ClientMainHeader'
import About from './pages/Client/Wishlist'
import Home from './pages/Client/Home'
import ProductDetails from './pages/Client/ProductDetail'
import Product from './pages/Client/Products'
import Wishlist from './pages/Client/Wishlist'
import Adminmainheader from './layout/AdminMainHeader'
import Dashboard from './pages/Admins/Home'
import AddProd from './pages/Admins/AddProduct'
import Contact from './pages/Admins/Contact'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>
      </Routes>
      <Routes>
      <Route path='/admin' element = {<Adminmainheader/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/admin/addproduct' element={<AddProd/>}/>
          
          <Route path='/admin/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
