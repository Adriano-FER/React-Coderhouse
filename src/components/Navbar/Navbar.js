import "./Navbar.css"
import logo from "./logo.bmp" 

import CartWidget from "./CartWidget"
const Navbar = () => {
    return (
        <div>
        <ul class="topnav">
         <li class="item"><a class="active" href="#home">Home</a></li>
        <li class="item"><a href="#products">Products</a></li>
         <li class="item"><a href="#cart">Cart</a></li>
        <li class="item"><a href="#about">About</a></li>
        <li class="item"><a href="#contact">Contact</a></li>
        <li class="brand"><a  >GamerForce <img src={logo} alt="Logo"></img></a> </li>
        <li > <CartWidget /></li>
        </ul>
        </div>
    )


}

export default Navbar;