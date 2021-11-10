import { useState } from 'react';
import React from 'react';
import './style.css';
import ItemList from '../ItemList/ItemList.js';
import { useEffect } from 'react';
import { useProvider } from '../../contexts/ApiContext.js';




export default function ItemListContainer({title}) {
  const [products, setproducts] = useState([])
  const itemListAccess = useProvider()
  function storeItems(items){
    itemListAccess.setallProducts(items)
    }
    

  const getItems = async () => {  
 
      try {let rawresponse = await fetch("/products.json");
      rawresponse = await rawresponse.json()
          await setproducts(rawresponse.list) 
          
         
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {

          getItems();
        storeItems(products)
    }, []);

  
      

  return (
    <div className="App bg-a">
        <ItemList items={products}/>
  
      <p className="whitetxt">Welcome to {title}</p>
    </div>
  );
}

