import { useState } from 'react';
import React from 'react';
import './style.css';
import ItemCount from "./ItemCount.jsx"



export default function ItemListContainer({title}) {

    
      

  return (
    <div className="App">
        
      <ItemCount stock="5" initial="1" onAdd="1" nombre="Bicicleta" />
      <p className="whitetxt">Welcome to {title}</p>
    </div>
  );
}

