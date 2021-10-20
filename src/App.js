import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"

function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer title="Gaming Area" />
    </div>
  );
}

export default App;
