import React from 'react'
import { data, productos } from './../getFetch/data.js'
import { Card, Button }  from 'react-bootstrap'

function ItemList () {
    return ( 
        <>

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
export default ItemList