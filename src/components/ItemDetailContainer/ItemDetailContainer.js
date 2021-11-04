import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetails from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({}) {
  const [products, setproducts] = useState([]);
  const itemID = useParams()
 
  const getItems = async () => {


    try {
      
      let rawresponse = await fetch(
        `https://rickandmortyapi.com/api/character/${itemID.id}`
      );
      rawresponse = await rawresponse.json();
      debugger
      await setproducts(rawresponse);
    
    } catch (error) {
      console.log(error);
    }
 
  };
  useEffect(() => {
    getItems();
    
  }, []);
  
  return (
    <div className="col-12">
            <div className="App">
        <p>funciono</p>
        <div className="container">
            <div className="row">  
                
        <ItemDetails details={products} key={0}/>
             </div>
        </div>
    </div>
    </div>
  );
}
