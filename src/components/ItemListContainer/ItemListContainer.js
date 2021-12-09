import { useState } from 'react';
import React from 'react';
import './style.css';
import ItemList from '../ItemList/ItemList.js';
import { useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "../firebase/config"
import { Container } from 'react-bootstrap';


export default function ItemListContainer({title}) {
  const [products, setproducts] = useState([])

  async function fetchData(){
    const db = getFirestore();
    const response = await getDocs(collection(db, "list"));
    let responsedata = response.docs.map((doc) => doc.data())
    let responseid = response.docs.map((doc) => doc.id)
    responsedata.forEach((element , index) => {
     element.id_firebase = responseid[index] 
    });
    console.log(responsedata)
    setproducts(responsedata)
   }

useEffect(() => {
fetchData()
}, [])
  
      

  return (
    <Container className="App container-fluid no-padding bg-a"> 
          <h2>{title}</h2>
        <ItemList items={products}/>
  

    </Container>
  );
}

