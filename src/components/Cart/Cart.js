import { useProvider } from '../../contexts/ApiContext.js';
import { useEffect } from 'react';
export default function Cart(){
    const itemListAccess = useProvider()
 
     
function showStoredProducts(list){

console.log(list)

}

useEffect(() => {
    showStoredProducts(itemListAccess.allProducts)
    return () => {
       
    }
}, [])

    return (
<>
        
</>

    )
 
    


}