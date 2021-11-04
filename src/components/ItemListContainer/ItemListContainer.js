import { useState } from 'react';
import React from 'react';
import './style.css';
import ItemList from '../ItemList/ItemList.js';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useEffect } from 'react';


export default function ItemListContainer({title}) {
  const [products, setproducts] = useState([])

  const getItems = async () => {  
      try {let rawresponse = await fetch(`https://rickandmortyapi.com/api/character/`);
          rawresponse = await rawresponse.json()
          await setproducts(rawresponse.results) 
           
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {

       
          getItems();
      
    }, []);

  
      

  return (
    <div className="App">
        <ItemList items={products}/>
      <ItemCount stock="5" initial="0" onAdd="1" nombre="Bicicleta" />
      <p className="whitetxt">Welcome to {title}</p>
    </div>
  );
}

