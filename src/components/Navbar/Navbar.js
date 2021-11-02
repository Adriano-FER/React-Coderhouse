import "./Navbar.css"
import logo from "./logo.png" 
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <div>
            <ul className="topnav">
             <li className="item"><a className="active" href="/#home">Home</a></li>
            <li className="item"><a href="/#products">Products</a></li>
             <li className="item"><a href="/#cart">Cart</a></li>
            <li className="item"><a href="/#about">About</a></li>
              <li className="item"><a href="/#contact">Contact</a></li>
             <li className="brand">GamerForce <img className="logo" src={logo} alt="Logo"></img> </li>
            <li > <CartWidget /></li>
        </ul>
        </div>
    )


}

export default Navbar;