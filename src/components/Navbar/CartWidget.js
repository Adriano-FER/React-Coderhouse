import cart from './cart.jpg'; // with import
import "./Cart.css"
import { useProvider } from '../../contexts/ApiContext.js';
import { Badge } from "react-bootstrap";


const CartWidget = () => {
    
    let cartProv = useProvider()
    const getTotalItems = cartProv.currentCart.length

    return (
        <div>
            <button onClick={() => cartProv.setcartOpen(true)}>
            <Badge badgeContent={getTotalItems} color="error">
            <img className="smallimg" src={cart} alt="Cart"></img>
            </Badge>
            </button>
        </div>
    )


}

export default CartWidget;