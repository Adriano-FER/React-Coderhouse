 import { createContext, useContext, useState} from "react";



const ProviderContext = createContext();


export const useProvider = () => useContext(ProviderContext)


export const ApiProvider = ({ children }) => {
  const [currentCart, setcurrentCart] = useState([])
  const [allProducts, setallProducts] = useState([])


return (
  <ProviderContext.Provider value={{currentCart, setcurrentCart, allProducts, setallProducts}}>
    {children}
  </ProviderContext.Provider>


)




}


//export const useAPI = () => useContext(ApiContext)

//   import {ApiProvider} from "./contexts/ApiContext";
//<ApiProvider> </ApiProvider>