
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useProvider } from '../../contexts/ApiContext.js';
import Spinner from 'react-bootstrap/Spinner'

export default function ItemDetails({ details, number} ) {
    console.log(details)
    console.log(number.id)
    const itemToShow = details.find(element => element.id == number.id);
    
    // const {alias, description, id, img, name, price, stock } = itemToShow : "Loading";}



    console.log(itemToShow)
    let kalo = useProvider()
    function addCart(delta) {
        kalo.setcurrentCart(delta)
    }

    return (



        <div className="col-12">
            <span></span>
            <button onClick={() => addCart("joystick")}>botonkalo</button>
            <span>{kalo.currentCart}</span>
            {itemToShow ?
                <div className="card detail" >
                    <img className="card-img-top" src={itemToShow.img} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title"></h5>

                        <p className="card-text">{itemToShow.name}  </p>
                        <span>{itemToShow.price} <br /></span>
                        <span>{itemToShow.description}  <br /></span>

                        <button>Buy</button>

                    </div>
                    <span> </span>
                    <ItemCount stock={itemToShow.stock} initial="0" onAdd="1" nombre={itemToShow.alias} />
                </div> 
                :  <Spinner class="cspinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>}
                </div>
                
               
 

        )


    }


/*
 */