import { useState } from 'react';


export default function ItemCount({stock, initial, onAdd, nombre, addCart, currentItem}){
  let cartReady = false;
    const [currentStock, setStock] = useState(stock)
    const [final, setBuy] = useState(initial)
    const [AddValue, setAddValue] = useState(onAdd)
    function buyFromStock() {
      if(currentStock !== 0){
        setStock(Number(currentStock) - Number(AddValue));
        setBuy(Number(final) + Number(AddValue))
        let buyInput = document.querySelector("#inputCart");
        buyInput.value = 0;
      }
 

      }
    function deleteFromStock(){
      if(final !== 0){
        setStock(Number(currentStock) + Number(AddValue));
        setBuy(Number(final) - Number(AddValue))

      }

    }

  
    return (
      <div className="whitetxt">
        {!cartReady ? <div>
           <h5>{nombre}</h5>
      <input type="number" list="MyCart" name="MyCart" id="inputCart"
       min={initial} max={currentStock}
       onChange={(e)=> setAddValue(e.target.value)}
       ></input>
     <p> stock: = {currentStock} </p>
     <p> MyCart = {final} </p>
     <button onClick={buyFromStock}>Agregar</button>
     <button onClick={deleteFromStock}>Restar</button>
     <button data-item={currentItem.id} onClick={addCart}>conformar compra </button> 
     </div> : <div><button ></button></div> }
      
      </div>
      )
    }

