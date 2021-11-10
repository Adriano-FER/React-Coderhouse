import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetails from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer({}) {
  const [products, setproducts] = useState([]);
  const ID = useParams()
 
  const getItems = async () => {

    
    try {let rawresponse = await fetch(`/products.json`);
    rawresponse = await rawresponse.json()
        await setproducts(rawresponse.list) 
   
        console.log(products)
    } catch (error) {
        console.log(error)
}
  
 
  };
  useEffect(() => {
    getItems();
    
  }, []);
  
  return (
    <div className="col-12 bg-3">
            <div className="App">
        <p>funciono</p>
        <div className="container">
            <div className="row">  
                
        {{products} ? <ItemDetails details={products} number={ID} key={0}/>: "ESTOY CARGANDO"} 
             </div>
        </div>
    </div>
    </div>
  );
}
