import { useCartContext } from "../../context/CartContext";
import { EmojiSadIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, vaciarCart, eliminarProducto, precioTotal, cantidadTotal } = useCartContext();

  return cartList.length ? (
    <div className="container grid grid-cols-12 mx-auto px-5 md:gap-x-5">
      <div className="flex flex-col items-end col-span-12 md:col-span-8 gap-y-5">
      { cartList.map(item => (
        <div className="w-full h-52 flex drop-shadow-md bg-white relative" key={item.id}>
          <img className=" w-auto h-full" src={item.img2} alt="" />
          <div className="flex flex-col justify-center md:justify-start p-5">
            <p className="text-md"><strong>Producto:</strong> {item.title}</p>
            <p className="text-md my-3"><strong>Cantidad:</strong> {item.cantidad}</p>
            <p className="text-md"><strong>Precio: {item.price}</strong></p>
          </div>
          <button className="absolute top-2 right-3" onClick={() =>eliminarProducto(item.id)}><XIcon className="h-6 w-6" /></button>
        </div>
      ))}
      <div className="flex flex-col items-end">
        <p className="text-md text-center"><strong>Total:</strong> {precioTotal()}</p>
        <p className="text-md text-center"><strong>Cantidad de productos:</strong> {cantidadTotal()}</p>
      </div>
      <button className="w-full md:w-1/4 bg-black text-white font-semibold px-4 py-5 cursor-pointer" onClick={vaciarCart}>Vaciar Carrito</button>
      </div>
      {/* <div className="col-span-12 md:col-span-4 bg-black h-52">
        <p>Formulario</p>
      </div> */}
    </div>
  ) : (
    <div className="container mx-auto flex flex-col items-center py-52">
      <div className="flex flex-row items-center px-5">
        <h1 className="text-2xl md:text-4xl font-semibold">Oh no, no hay items en tu carrito </h1>
        <EmojiSadIcon className="w-11 h-11 md:w-9 md:h-9 ml-2"/>
      </div>
      <Link to={`/`}>
        <button className="mt-10 bg-gray-800 w-full text-white font-semibold px-4 py-5 cursor-pointer ease-in-out duration-300 md:py-4 hover:bg-gray-700">Volver a comprar</button>
      </Link>
    </div>
  );
}

export default Cart;
