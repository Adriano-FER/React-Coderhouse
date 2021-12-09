

import { Link } from 'react-router-dom';
import "./Item.css"


export default function Item({product}){

const {img, name, price, stock, alias, id_firebase} = product

     return (

                
            
           <div className=".col-xl-3 col-lg-3 col-md-5 col-sm-6 col-xs-12 transparent">
                 <div className="card product transparent contentBox">
                 <img className="card-img-top transparet imgBox" src={img} alt="item_view"></img>
                     <div className="card-body transparent">
                     <h5 className="card-title transparent">{alias} {name}</h5>
                 <p className="card-text price">Stock: {stock} Precio:{price} $ARS</p>
                 <Link className="buy" to={`/detail/${id_firebase}`}>Detalles</Link>
                    </div>
            
                </div>

                </div> 
  

        )


    }   
