import React from 'react'
import AccountComponent from './AccountWidget'
import ImageComponent from './CartWidget'


const NavBar = () => {
  return (
    <div>
      <h1 className='nav'>Canton Games</h1>
      <div className="container">
      <ul class="nav">
        <li><a href ="/"> Inicio </a></li>
        <li><a href ="/"> PC </a></li>
        <li><a href ="/"> Xbox SX </a></li>
        <li><a href ="/"> Xbox One </a></li>
        <li><a href ="/"> PS5 </a></li>
        <li><a href ="/"> PS4 </a></li>
        <li><a href ="/"> N Switch </a></li>
        <li><a href ="/"> Ofertas </a></li>
        <li><a href ="/"> Contacto </a></li>
      </ul>
    </div>
    <ImageComponent />
    <AccountComponent />
    </div>
  )
}

export default NavBar