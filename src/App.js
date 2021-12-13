import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import Home from "./components/Home/Home";
import { ApiProvider } from "./contexts/ApiContext";
import Cart from "./components/Cart/Cart"


function App() {

 



  return (
  <ApiProvider>
   <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/">
   <Home />
    </Route>
      <Route exact path="/products/:category">
    <ItemListContainer title="Custom Search" />
    </Route>
      <Route exact path="/products/">
    <ItemListContainer title="Full Catalogue" />
    </Route>
    <Route path="/detail/:id">
    <ItemDetailContainer />
    </Route>
    <Route path="/cart">
    <Cart />
    </Route>
    </Switch>
    </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
