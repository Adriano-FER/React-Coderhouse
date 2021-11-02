import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/">
    <ItemListContainer title="Gaming Area" />
    </Route>
    <Route exact path="/Detail">
    <ItemDetailContainer />
    </Route>

    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
