import React, { useEffect, useState } from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'
import { data } from './getFetch/data.js'
import ItemCount from './ItemCount/ItemCount.js'
import ItemDetailContainer from './Item/ItemDetailContainer'
import ItemList from './Item/ItemList'

const titulo='Bienvenido a Canton Games!';

/*const onAdd = (cantidad) => {
  console.log (cantidad)
}

const task = new Promise ((resolve, rejected) => {
  let url = productos;
  if (url === productos) {
      setTimeout (() => {
          resolve(productos);
      }, 2000);
  } else {
      rejected('400 incorrecto');
  }
});
task.then(
  (response) => console.log(response),
  (error) => console.log(error)
)*/

// <ItemCount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
// <ItemDetailContainer />
// <ul className='mapProd'> {prod.img } <br /> {prod.nombre} </ul>)
// <Card.Img variant="top" src= { prod.img}  alt='Imagen del juego' />

function ItemListContainer() {

  const [Productos, setProductos] = useState ([])

  useEffect(() => {
    data
      .then((respuesta) => setProductos(respuesta))
      .catch(err => console.log(err))
      .finally(() => console.log('Loading'))
  })

  return ( 
    <>
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    </div>

    <ItemList Productos = {Productos} />
</>
  )
}

export default ItemListContainer