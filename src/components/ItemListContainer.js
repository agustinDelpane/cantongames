import React from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'

const titulo='Bienvenido a Canton Games!';


function ItemListContainer() {
  return (
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    </div>
  )
}

export default ItemListContainer