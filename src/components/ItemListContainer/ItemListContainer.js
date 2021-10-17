import { useState } from 'react';
import React from 'react';
import './style.css';

const Hello = ({ counter }) => {
  return <h1>Hello {counter}!</h1>;
};

export default function ItemListContainer() {
  const [counter, setCounter] = useState(20);

  const handleClick = () => {
    setCounter(counter + 10);
  };

  return (
    <div onClick={handleClick} className="App">
      <Hello counter={counter} />
      <p className="whitetxt">Welcome to my STORE</p>
    </div>
  );
}
