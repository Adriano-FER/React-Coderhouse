import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useProvider } from "../../contexts/ApiContext.js";

export default function ItemDetails({ itemToShow }) {



  // const {alias, description, id, img, name, price, stock } = itemToShow : "Loading";}

  let cart = useProvider();

  function addCart(e) {
  debugger
    let quantity = e.target.getAttribute("data-quantity");
    quantity = Number(quantity);
    const itemToBuy = itemToShow
    itemToBuy.amount = quantity;
    if (quantity <= 0){ return }
    debugger;
    let actualCart = [...cart.currentCart]
    let foundItem = false
    if (actualCart && itemToBuy) {
      actualCart.forEach((element) => {
        if (element.id === itemToBuy.id) {
          element.amount += quantity;
          foundItem = true
          //encuentra si ya hay algo en el carrito, y le agrega cantidad.
        }
      });
    }
    if(!foundItem){
      actualCart = [...actualCart, itemToBuy];
    }
    cart.setcurrentCart(actualCart);
    console.log(cart.currentCart);
  }

  return (
    <div className="col-12"> 
        <div className="card detail">
          <img
            className="card-img-top"
            src={itemToShow.img}
            alt="item"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{itemToShow.alias}</h5>

            <p className="card-text">{itemToShow.name} </p>
            <span>
              {itemToShow.price} <br />
            </span>
            <span>
              {itemToShow.description} <br />
            </span>
          </div>
           <ItemCount addCart={addCart} currentItem={itemToShow} stock={itemToShow.stock}/>
          
        </div>
    </div>

  );
}

