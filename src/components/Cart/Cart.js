 import { useProvider } from '../../contexts/ApiContext.js';
import { NavLink } from 'react-router-dom';
import "./Cart.css";

export default function Cart(){

    const cart = useProvider()

    function removeProduct(e){
        let newCart = cart.currentCart
        debugger
        let target = e.target;
        let id = target.getAttribute("data-item")
        id = Number(id)
 
        if(id >= 0){ 
        
          newCart = newCart.filter(elem => !(elem.id === id))
            console.log(newCart)
            
             cart.setcurrentCart(newCart)
            return;
        
            
        }

    }
    function clearCart(){
        let emptyCart = []
             cart.setcurrentCart(emptyCart)
            return;

    }

     
function showStoredProducts(){

    

 if(cart.currentCart.length === 0){
return   <div class="text-center"><img src="./Extras/empty-cart.png" alt="empty cart"></img></div>} 
 
else return cart.currentCart.map((item, index)=>
<container className="bg-3">
<ul>
 <li>{item.id}<img className="cartimg" src={item.img} alt="product"></img> 
 <strong>{item.alias}</strong> {item.name} 
 <span className="rightsp">amount: {item.amount}</span> 
 <button data-item={item.id} onClick={removeProduct}>Quitar Producto</button> </li>

 </ul>
 </container>
 )


}

    return (
<>
        
        {showStoredProducts()}
        {cart.currentCart.length !== 0 ? 
        <>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <div><NavLink to="/form">Terminar compra</NavLink></div>
        </>
         : []}
        
</>

    )
 
    


}