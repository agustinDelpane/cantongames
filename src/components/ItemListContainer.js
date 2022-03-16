import React from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'
import ItemCount from './ItemCount/ItemCount.js'
import ItemDetailContainer from './Item/ItemDetailContainer'

const titulo='Bienvenido a Canton Games!';

const onAdd = (cantidad) => {
  console.log (cantidad)
}

function ItemListContainer() {
  return (
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    <ItemCount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
    <ItemDetailContainer />
    </div>
  )
}

export default ItemListContainer