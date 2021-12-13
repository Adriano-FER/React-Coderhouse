import "./Cart.css"
import { useProvider } from '../../contexts/ApiContext.js';
import { Badge } from "react-bootstrap";


const CartWidget = () => {
    
    let cartProv = useProvider()
    const getTotalItems = cartProv.currentCart.length
    function showItems(){
        if (getTotalItems > 0){
            return getTotalItems
        }
    }
//          <img className="smallimg" src={cart} alt="Cart"></img>
    return (
        <div>
            <button class="bg-btn" onClick={() => cartProv.setcartOpen(true)}>
            <Badge badgeContent={showItems} color="error">
  
            </Badge>
            </button>
        </div>
    )


}

export default CartWidget;