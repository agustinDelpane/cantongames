import React from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'
import productos from './Item/Item.js'
import ItemCount from './ItemCount/ItemCount.js'
import ItemDetailContainer from './Item/ItemDetailContainer'

const titulo='Bienvenido a Canton Games!';

const onAdd = (cantidad) => {
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
)




function ItemListContainer() {
  return (

    
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    <div className='mapProd'>
  { productos.map(prod => <ul className='mapProd'> {prod.img } <br /> {prod.nombre} </ul>)   }
    </div>
    <ItemCount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
    <ItemDetailContainer />
    </div>
  )
}

export default ItemListContainer