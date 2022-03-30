import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (item) => {
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

    //eliminar producto del carrito
    const eliminarProducto = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    //total de productos en el carrito
    const precioTotal = () => {
        let total = 0;

        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CLP',
        });
          
        cartList.forEach(item => {
            total += item.price * item.cantidad;
        });
        return formatter.format(total);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            precioTotal, 
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}
 export default CartContextProvider;
