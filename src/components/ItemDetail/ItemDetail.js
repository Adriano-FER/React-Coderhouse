import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useProvider } from "../../contexts/ApiContext.js";
import Spinner from "react-bootstrap/Spinner";

export default function ItemDetails({ details, number }) {
  const itemToShow = details.find((element) => element.id == number.id);

  // const {alias, description, id, img, name, price, stock } = itemToShow : "Loading";}

  let cart = useProvider();

  function addCart(e) {
    let id = e.target.getAttribute("data-item");
    let quantity = e.target.getAttribute("data-quantity");
    debugger;
    const itemToBuy = details.find((element) => element.id == id);
  /*  if (cart.currentCart && cart.currentCart.test) {
      cart.currentCart.test.forEach((element) => {
        if (element.name === itemToBuy.name) {
          element.quantity += quantity;
          cart.setcurrentCart(...cart.currentCart, itemToBuy);
      
        return;
      });  }
    }*/

    cart.setcurrentCart([...cart.currentCart, itemToBuy]);

    console.log(cart.currentCart);
  }

  return (
    <div className="col-12">
      <span></span>

      {itemToShow ? (
        <div className="card detail">
          <img
            className="card-img-top"
            src={itemToShow.img}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title"></h5>

            <p className="card-text">{itemToShow.name} </p>
            <span>
              {itemToShow.price} <br />
            </span>
            <span>
              {itemToShow.description} <br />
            </span>
          </div>
          <span> </span>
          <ItemCount
            addCart={addCart}
            currentItem={itemToShow}
      
          />
        </div>
      ) : (
        <Spinner class="cspinner" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

/*
 */
