import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="soy un componente contenedor" />
    </>
  );
}

export default App;
