
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';

export default function Item({product, id}){
    
const {image, name, species, status} = product
   function redirectItem(e){
    
    }
     return (

                
            
            <div className="col-3">
                 <div className="card" >
                 <img className="card-img-top" src={image} alt="Card image cap"></img>
                     <div className="card-body">
                     <h5 className="card-title">{name}</h5>
                 
                 <p className="card-text">{species}cm tall and was born in {status}</p>
                 <button><Link to={`/detail/${id}`}>Detalles</Link></button>
                    </div>
                    <ItemCount stock="5" initial="0" onAdd="1" />
                </div>

                </div> 
                
              
  

        )


    }   
