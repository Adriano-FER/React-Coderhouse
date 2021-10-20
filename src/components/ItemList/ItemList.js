import { useState } from 'react';
import { useEffect } from 'react';

export default function Itemlist({url}){
   const [visibleElement, setVisibleElement] = useState([])
    const getItems = async () => {
        try {let rawresponse = await fetch(url);
            rawresponse = await rawresponse.json()
             setVisibleElement(rawresponse.results) 
            console.log(visibleElement)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

         
            getItems();
        
      }, []);



    return (
        <div className="whitetxt">
            <ul> 
            { visibleElement.map((character,index) => 
            <li key={index}>He is {character.name}, is {character.height}cm tall and was born in {character.birth_year}</li>)}
           
            </ul>
        </div>
        )


    }   
