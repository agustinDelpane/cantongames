import React from 'react';
import './../ItemListContainer.css'

export const productos = [
    { id: '1', nombre: 'DayZ', precio: '$2000', img: <img src={require('./../Item/images/dayz.png')} className='dayzPng' alt='DayZ' /> },
    { id: '2', nombre: 'Mass Effect Legendary Edition', precio: '$3500', img: <img src={require('./../Item/images/me.png')} className='mePng' alt='Mass Effect LE' /> },
    { id: '3', nombre: 'Star Wars Battlefront 2', precio: '$800', img: <img src={require('./../Item/images/swb2.png')} className='swbPng' alt='Star Wars Battlefront 2' /> },
    { id: '4', nombre: 'GTA V', precio: '$500', img: <img src={require('./../Item/images/gtav.png')} className='gtavPng' alt='GTA V' /> },
    { id: '5', nombre: 'Fall Guys', precio: '$700', img: <img src={require('./../Item/images/fallguys.png')} className='fgPng' alt='Fall Guys' /> },
    { id: '6', nombre: 'Dark Souls 3', precio: '$1600', img: <img src={require('./../Item/images/ds3.png')} className='ds3Png' alt='Dark Souls 3' /> },
    { id: '7', nombre: 'Resident Evil 8', precio: '$3500', img: <img src={require('./../Item/images/re8.png')} className='re8Png' alt='Resident Evil 8' /> },
    { id: '8', nombre: 'Age Of Empires 3', precio: '$600', img: <img src={require('./../Item/images/aoe3.png')} className='aoe3Png' alt='Age Of Empires 3' /> }
]

export const data = new Promise((resolve, reject) => {
    let url = 'canton.com'
    if (url === 'canton.com') {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    }else {
        reject ('404')
    }
})