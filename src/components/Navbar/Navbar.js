import "./Navbar.css"
import logo from "./logo.png" 
import CartWidget from "./CartWidget"
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <ul className="topnav">
             <li className="item"><NavLink to="/">Home</NavLink></li>
            <li className="item"><NavLink to="/products">Products</NavLink></li>
            <li className="item"><NavLink to="/detail">Item Detail</NavLink></li>
             <li className="item"><NavLink to="/cart">Cart</NavLink></li>
            <li className="item"><NavLink to="/about">About</NavLink></li>
              <li className="item"><NavLink to="/contact">Contact</NavLink></li>
             <li className="brand">GamerForce <img className="logo" src={logo} alt="Logo"></img></li>
            <li className="brand"><NavLink to="/navbar"><CartWidget /></NavLink></li>
        </ul>
        </div>
    )


}

export default Navbar;