import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <div className="container w-full grid grid-cols-12 mx-auto gap-5">
        <ItemListContainer />
      </div>

    </>
  );
}

export default App;
