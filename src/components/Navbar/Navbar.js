import "./Navbar.css"
import "./logo.bmp"
const Navbar = () => {
    return (
        <div>
        <ul class="topnav">
         <li class="item"><a class="active" href="#home">Home</a></li>
        <li class="item"><a href="#products">Products</a></li>
         <li class="item"><a href="#cart">Cart</a></li>
        <li class="item"><a href="#about">About</a></li>
        <li class="item"><a href="#contact">Contact</a></li>
        <li class="brand"><a  >GamerForce <img src="./logo.bmp" alt="Logo"></img></a> </li>
        </ul>
        </div>
    )


}

export default Navbar;