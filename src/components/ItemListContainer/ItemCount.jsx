import { useState } from 'react';


export default function ItemCount({stock, initial, onAdd, nombre}){
    const [Stock, setStock] = useState(stock)
    const [Final, setBuy] = useState(initial)

    function buyFromStock() {
      if(Stock !== 0){
        setStock(Number(Stock) - Number(onAdd));
        setBuy(Number(Final) + Number(onAdd))
      }

      }
      
   
    return (
      <div>
      <h5>{nombre}</h5>
     <p> stock: = {Stock} </p>
     <p> MyCart = {Final} </p>
     <button onClick={buyFromStock}>Comprar</button>
      </div>
      )
    }

