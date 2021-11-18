 import { useProvider } from '../../contexts/ApiContext.js';
import { useState } from 'react';


export default function Cart(){
    const [ItemList, setItemList] = useState()
    const cart = useProvider()

     
function showStoredProducts(){
console.log(ItemList)
 if(cart.currentCart.length === 0){return "Cart is Empty"}   
 
else return cart.currentCart.map((item, index)=> <span>Item= {item.id} Alias={item.alias} Marca={item.name}</span>)


}


    return (
<>
        {showStoredProducts()}
</>

    )
 
    


}