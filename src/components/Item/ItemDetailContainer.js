import React from 'react'
import ItemDetail from './ItemDetail';



const getItem = new Promise ((resolve, rejected) => {
    let url = ItemDetail;
    if (url === ItemDetail) {
        setTimeout (() => {
            resolve(getItem);
        }, 2000);
    } else {
        rejected('400 incorrecto');
    }
});
getItem.then(
    (response) => console.log(response),
    (error) => console.log(error)
)

function ItemListContainer () {
    return (
        <ItemDetail />
    )    
}



export default ItemListContainer