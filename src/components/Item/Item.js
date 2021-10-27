import { useState } from 'react';
import { useEffect } from 'react';



export default function Item({product}){
    console.log(product)
const {image, name, species, status} = product

     return (

                
            
            <div className="col-3">
                 <div className="card" >
                 <img className="card-img-top" src={image} alt="Card image cap"></img>
                     <div className="card-body">
                     <h5 className="card-title">{name}</h5>
                 
                 <p className="card-text">{species}cm tall and was born in {status}</p>
                 <button>Detalles</button>
                    </div>
                </div>
                </div> 
                
              
  

        )


    }   
