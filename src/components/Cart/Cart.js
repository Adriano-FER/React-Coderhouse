 import { useProvider } from '../../contexts/ApiContext.js';
import { useState } from 'react';
import "./Cart.css";

export default function Cart(){
    const [ItemList, setItemList] = useState()
    const cart = useProvider()

     
function showStoredProducts(){
console.log(ItemList)
 if(cart.currentCart.length === 0){return "Cart is Empty"}   
 
else return cart.currentCart.map((item, index)=> <li>amount= {cart.itemToBuy} <img className="cartimg" src={item.img} alt="Card image cap"></img> Item= {item.id} Alias={item.alias} Marca={item.name}</li>)


}


    return (
<>
        <ul>
        {showStoredProducts()}
        </ul>
</>

    )
 
    


}