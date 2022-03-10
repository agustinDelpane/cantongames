import React from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'
import ItemCount from './ItemCount/ItemCount.js'
import ItemList from './Item/ItemList'

const titulo='Bienvenido a Canton Games!';

const onAdd = (cantidad) => {
  console.log (cantidad)
}

function ItemListContainer() {
  return (
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    <ItemCount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
    <ItemList />
    </div>
  )
}

export default ItemListContainer