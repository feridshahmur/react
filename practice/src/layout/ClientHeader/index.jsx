import React  from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss'
const ClientHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
            Logo
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/product'}>Products</NavLink>
                    <NavLink to={'/wishlist'}>About</NavLink>
                    
                    
                </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default ClientHeader
