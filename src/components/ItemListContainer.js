import React from 'react'
import TituloGreet from './Greet/Titulo'
import './input/input'
import { productos } from './Item/Item.js'
import ItemCount from './ItemCount/ItemCount.js'
import ItemDetailContainer from './Item/ItemDetailContainer'
import { Card, Button }  from 'react-bootstrap'

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

// <ItemCount initial={ 1 } stock={ 10 } onAdd={ onAdd } />
// <ItemDetailContainer />
// <ul className='mapProd'> {prod.img } <br /> {prod.nombre} </ul>)
// <Card.Img variant="top" src= { prod.img}  alt='Imagen del juego' />

function ItemListContainer() {
  return ( 
    <>
    <div className='ILC'>
    <TituloGreet titulo={ titulo } saludo={() => console.log('Saludos, internauta!')  } />
    </div>

    <div className='mapProd'>
  { productos.map(prod => <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title> { prod.nombre } </Card.Title>
    <div className='imgCard'>
      <img src={ prod.img } alt='Imagen del juego'></img>
    </div>
    <Card.Text>
      { prod.precio }
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  </Card>)
  }
</div>
</>
  )
}

export default ItemListContainer