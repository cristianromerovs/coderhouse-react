import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

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
            setCartList([...cartList, item]);
            setCartTotal(cartTotal+1);
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

    //cantidad de productos en el carrito
    const cantidadTotal = () => {
        let cantItems = 0;
        cartList.forEach(item => {
            cantItems += item.cantidad;
        });
        return cantItems;
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            precioTotal, 
            eliminarProducto,
            cantidadTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
 export default CartContextProvider;
