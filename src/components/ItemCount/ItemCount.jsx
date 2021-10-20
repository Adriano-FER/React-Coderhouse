import { useState } from 'react';


export default function ItemCount({stock, initial, onAdd, nombre}){
    const [currentStock, setStock] = useState(stock)
    const [final, setBuy] = useState(initial)

    function buyFromStock() {
      if(currentStock !== 0){
        setStock(Number(currentStock) - Number(onAdd));
        setBuy(Number(final) + Number(onAdd))
      }
 
      }
    function deleteFromStock(){
      if(final !== 0){
        setStock(Number(currentStock) + Number(onAdd));
        setBuy(Number(final) - Number(onAdd))
      }

    }
   
    return (
      <div className="whitetxt">
      <h5>{nombre}</h5>
     <p> stock: = {currentStock} </p>
     <p> MyCart = {final} </p>
     <button onClick={buyFromStock}>Agregar</button>
     <button onClick={deleteFromStock}>Restar</button>
     <button onClick>agregar al carrito</button>
      </div>
      )
    }

