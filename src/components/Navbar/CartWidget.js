import cart from './cart.jpg'; // with import
import "./Cart.css"
const CartWidget = () => {
    return (
        <div>
            <img className="smallimg" src={cart} alt="Cart"></img>
        </div>
    )


}

export default CartWidget;