import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (item) => {
        //if item exist in cartList, then update the quantity
        if(cartList.some(cartItem => cartItem.id === item.id)){
            console.log("Entro al if");
            setCartList(cartList.map(cartItem => {
                if(cartItem.id === item.id){
                    cartItem.cantidad += item.cantidad;
                }
                return cartItem;
            }
            ));
        }else{
            console.log("Entro al else");
            setCartList([...cartList, item]);
        }
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
