import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetails from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "../firebase/config"
import { Spinner } from "react-bootstrap";

export default function ItemDetailContainer({}) {
  const [products, setproducts] = useState([]);
  const ID = useParams()

  useEffect(async () => {

    const db = getFirestore();
    const docRef = await doc(db, "list", ID.id)
    const customproduct = await getDoc(docRef)
    if (customproduct) {
      
      setproducts(customproduct.data())

    } else {
      console.log("No such document!");
    }

  
  }, []);
  
  return (
    <div className="col-12 bg-3">
            <div className="App">
        <div className="container">
            <div className="row">           
        {{products} ? <ItemDetails itemToShow={products} number={products.id} key={0}/>:
         <Spinner class="spinner-border" role="status">
         <span class="sr-only">Loading...</span>
       </Spinner>} 
             </div>
        </div>
    </div>
    </div>
    
  );
}
