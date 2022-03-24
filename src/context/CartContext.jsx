import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (item) => {
        //if item exist in cartList, not add it again
        if(cartList.find(cartItem => cartItem.id === item.id)){
            return;
        }
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
