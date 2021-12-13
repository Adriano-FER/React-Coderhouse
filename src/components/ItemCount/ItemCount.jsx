import { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "./ItemCount.css"
export default function ItemCount({ addCart, currentItem, stock, showButton}){
  let nombre = currentItem.alias
    const [currentStock, setStock] = useState([])
    const [actualBuyQuantity, setBuyQuantity] = useState(0)
    const [AddValue, setAddValue] = useState(0)
  let id = currentItem.id
  useEffect(() => {
    setStock(stock)

  }, [stock])




    function buyFromStock() {
      if(currentStock !== 0 && currentStock >= AddValue){
        setStock(Number(currentStock) - Number(AddValue));
        setBuyQuantity(Number(actualBuyQuantity) + Number(AddValue))
        //actualBuyQuantity es el valor que se envía hacia ItemDetail y luego al carrito.
      }

      }
    function deleteFromStock(){
      if(actualBuyQuantity !== 0 && actualBuyQuantity >= AddValue){
        setStock(Number(currentStock) + Number(AddValue));
        setBuyQuantity(Number(actualBuyQuantity) - Number(AddValue))

      }

    }

  
    return (
      <div className="whitetxt">
      <div>
          {currentItem.stock}
           <h5>{nombre}</h5>
      <input type="number" list="MyCart" name="MyCart" id="inputCart" 
       min={0} max={currentStock}
       onChange={(e)=> setAddValue(e.target.value)}
       ></input>
     <p> stock: = {currentStock} </p>
     <p> MyCart = {actualBuyQuantity} </p>
     <button class="ICButton" onClick={buyFromStock}>Agregar</button>
     <button class="ICButton" onClick={deleteFromStock}>Restar</button>
     <button class="ICButton" data-quantity={actualBuyQuantity} data-item={id} onClick={addCart}>conformar compra </button> 
     {showButton ? <div><NavLink to="/cart"><button class="myBuytton">Ir al carrito</button></NavLink></div> : null}
     </div>
      </div>
      )
    }

