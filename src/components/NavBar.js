import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccountComponent from './AccountWidget'
import ImageComponent from './CartWidget'


const NavBar = () => {
  return (
    <div>
       <Routes>
            <Route path='/' element={ <h1 className='nav'>Canton Games</h1> } />
        </Routes>
      
      <div className="container">
      <ul className="nav">
        <li><a href ="/"> Inicio </a></li>
        <li><a href ="/category/:categoryId"> PC </a></li>
        <li><a href ="/category/:categoryId"> Xbox SX </a></li>
        <li><a href ="/category/:categoryId"> Xbox One </a></li>
        <li><a href ="/category/:categoryId"> PS5 </a></li>
        <li><a href ="/category/:categoryId"> PS4 </a></li>
        <li><a href ="/category/:categoryId"> N Switch </a></li>
        <li><a href ="/category/:categoryId"> Ofertas </a></li>
        <li><a href ="/category/:categoryId"> Contacto </a></li>
      </ul>
    </div>
    <ImageComponent />
    <AccountComponent />
    </div>
  )
}

export default NavBar