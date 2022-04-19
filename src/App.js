import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { ItemListContainer }  from "./components/ItemsListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import About from './components/About/About';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path='/*' element={ <Navigate to='/' replace /> } />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;