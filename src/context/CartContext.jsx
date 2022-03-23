import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (item) => {
        setCartList([ ...cartList, item ]);
    }

    const vaciarCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
 export default CartContextProvider;
