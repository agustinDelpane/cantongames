import {useState} from "react";
import './ItemCount.css'

function ItemCount ({ initial, stock, onAdd }) {


  const [count, setCount] = useState(initial)

  const sumarCount = ()=> {
      if (count < stock) {
        setCount(count+1)
      };
  };

  const restarCount = ()=> {
    if (count > initial){
      setCount (count-1)
    }    

  }

  const restartCount = ()=> {
    setCount(initial)
  }

  const agregarCarrito = ()=> {
    onAdd (count)
  }


  return (

    <div className="itemBox">
      { ( ItemCount ) }
       <label className="labelCount">{ count } </label>
       <button onClick={ sumarCount } className="itemmas">  +  </button>
       <button onClick={ restarCount } className="itemmenos">  -  </button>
       <button onClick={ restartCount } className="itemRestart">  Reiniciar  </button>
       <button onClick={ agregarCarrito } className="agregarCarr">Agregar al Carrito</button>
    </div>

  )
};

export default ItemCount