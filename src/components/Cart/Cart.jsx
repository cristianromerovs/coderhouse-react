import { useCartContext } from "../../context/CartContext";

function Cart() {
    const { cartList } = useCartContext();
    console.log(cartList);
  return (
    <div>
        <h1>Cart</h1>
        {/* { cartList.map(item => <li> {item.name} </li>) } */}
    </div>
  );
}

export default Cart;
