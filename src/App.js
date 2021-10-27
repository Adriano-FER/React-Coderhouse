import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer title="Gaming Area" />

    </div>
  );
}

export default App;
