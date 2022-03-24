import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, vaciarCart } = useCartContext()
  console.log(cartList)
  return (
    <div className="flex flex-col">
      { cartList.map(item => (
        <div className="w-52" key={item.id}>
          <img className="" src={item.img2} alt="" />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.cantidad}</p>
        </div>
      ))}
      <button onClick={vaciarCart}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
