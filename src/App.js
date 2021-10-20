import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import Item from "./components/Item/Item";
function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer title="Gaming Area" />
    <Item />
    </div>
  );
}

export default App;
