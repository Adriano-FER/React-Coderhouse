import { useState, useEffect} from 'react';


export default function ItemCount({ addCart, currentItem, stock}){
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
     <button onClick={buyFromStock}>Agregar</button>
     <button onClick={deleteFromStock}>Restar</button>
     <button data-quantity={actualBuyQuantity} data-item={id} onClick={addCart}>conformar compra </button> 
     </div>
      </div>
      )
    }

