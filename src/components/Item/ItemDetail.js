import React from 'react'

const item = [
    { id: '2', nombre: 'Mass Effect Legendary Edition', precio: '$3500', img: <img src={require('./images/me.png')} className='mePng' alt='Mass Effect LE' /> },
]

function ItemDetail () {
    return (
        <div className='mapItem'>
            <br/> <br/> <br/>
            { item.map(prod => <ul className='mapID'> {prod.img } <br /> {prod.nombre} <br /> {prod.precio} </ul>)   }
        </div>
    )
}


export default ItemDetail