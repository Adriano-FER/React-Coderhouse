import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//clonar con spread operator,

const perfil = {
  nombre:"Julio",
  apellido:"Profe"

};

const perfilconEdad = {
  ...perfil,
  edad:25,
  nacionalidad:"Hemaniano"
}
console.log(perfilconEdad)

//perfilconEdad === perfil false, no son lo mismo. Los objetos aunque lo clonemos nunca son lo mismo 
//ignora lo de la edad, esto tampoco da igual si los comparamos apenas copiados.