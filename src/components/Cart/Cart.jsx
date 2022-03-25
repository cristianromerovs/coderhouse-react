import { useCartContext } from "../../context/CartContext";

function Cart() {
  const { cartList, vaciarCart } = useCartContext();

  return (
    <div className="container grid grid-cols-12 mx-auto md:gap-x-5">
      <div className="flex flex-col items-end col-span-12 md:col-span-8 gap-y-5">
      { cartList.map(item => (
        <div className="w-full h-52 flex drop-shadow-md bg-white relative" key={item.id}>
          <img className=" w-auto h-full" src={item.img2} alt="" />
          <div className="flex flex-col p-5">
            <p className="text-md"><strong>Producto:</strong> {item.title}</p>
            <p className="text-md my-3"><strong>Cantidad:</strong> {item.cantidad}</p>
            <p className="text-md"><strong>Precio: {item.price}</strong></p>
          </div>
          <button className="absolute top-2 right-3">X</button>
        </div>
      ))}
      <button className=" w-1/4 bg-black text-white font-semibold px-4 py-5 cursor-pointer" onClick={vaciarCart}>Vaciar Carrito</button>
      </div>
      {/* <div className="col-span-12 md:col-span-4 bg-black h-52">
        <p>Formulario</p>
      </div> */}
    </div>
  );
}

export default Cart;
