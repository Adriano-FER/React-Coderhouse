
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import "./Item.css"


export default function Item({product, id}){


const {img, name, price, stock, alias} = product
   function redirectItem(e){

    }
     return (

                
            
            <div className="col-lg-3 col-md-5 col-sm-6 col-xs-12 transparent">
                 <div className="card product transparent">
                 <img className="card-img-top transparet" src={img} alt="Card image cap"></img>
                     <div className="card-body transparent">
                     <h5 className="card-title transparent">Producto: {name}</h5>
                    
                    
                 <p className="card-text">Stock: {stock} Precio:{price} $ARS</p>
                 <button><Link to={`/detail/${id}`}>Detalles</Link></button>
                    </div>
            
                </div>

                </div> 
                
              
  

        )


    }   
