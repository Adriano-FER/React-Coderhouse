
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useProvider } from '../../contexts/ApiContext.js';
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetails({ details, number} ) {

    const itemToShow = details.find(element => element.id == number.id);  
  
    // const {alias, description, id, img, name, price, stock } = itemToShow : "Loading";}

    
    let cart = useProvider()
   

    
    function addCart(e) {
        let id = e.target.getAttribute("data-item")
        const itemToBuy= details.find(element => element.id == id);  
        cart.setcurrentCart([... cart.currentCart, itemToBuy])
        
        console.log(cart)

    }

 


    return (



        <div className="col-12">
            <span></span>
          
           
            {itemToShow ?
                <div className="card detail" >
                    <img className="card-img-top" src={itemToShow.img} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title"></h5>

                        <p className="card-text">{itemToShow.name}  </p>
                        <span>{itemToShow.price} <br /></span>
                        <span>{itemToShow.description}  <br /></span>

                        

                    </div>
                    <span> </span>
                    <ItemCount addCart={addCart} currentItem={itemToShow} stock={itemToShow.stock} initial="0" onAdd="1" nombre={itemToShow.alias} />
                </div> 
                :  <Spinner class="cspinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
                </div>
                
               
 

        )


    }


/*
 */