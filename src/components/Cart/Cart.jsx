import { useCartContext } from "../../context/CartContext";
import { EmojiSadIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react"

function Cart() {
  const { cartList, vaciarCart, eliminarProducto, precioTotal, cantidadTotal } =
    useCartContext();

    const [dataForm, setDataForm] = useState({
      email: '', name: '', phone: ''
    })

    //state orden finalizada
    const [ordenFinalizada, setOrdenFinalizada] = useState(false)

    const generateOrder = async (e) => { 
      e.preventDefault();
      let orden = {}      

      orden.buyer = dataForm
      orden.total = precioTotal();

      orden.items = cartList.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.title;
          const precio = cartItem.price * cartItem.cantidad;
          
          return {id, nombre, precio}   
      })
      console.log(orden)

      const db = getFirestore()
      const queryCollection = collection(db, 'orders')
      addDoc(queryCollection, orden)
      .then(resp => console.log(`Numero de orden: ${resp.id}\nNombre: ${dataForm.name}\nEmail: ${dataForm.email}\nTelefono: ${dataForm.phone}\nTotal: ${precioTotal()}`))
      .catch(err => console.error(err))
      .finally(() => setOrdenFinalizada(true) )
    }

    const handleChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
  }

  return cartList.length ? (
    <div className="container grid grid-cols-12 mx-auto px-5 md:gap-x-5">
      <div className="flex flex-col items-end col-span-12 md:col-span-8 gap-y-5">
        {cartList.map((item) => (
          <div
            className="w-full h-52 flex drop-shadow-md bg-white relative"
            key={item.id}
          >
            <img className=" w-auto h-full" src={item.img2} alt="" />
            <div className="flex flex-col justify-center md:justify-start p-5">
              <p className="text-md">
                <strong>Producto:</strong> {item.title}
              </p>
              <p className="text-md my-3">
                <strong>Cantidad:</strong> {item.cantidad}
              </p>
              <p className="text-md">
                <strong>Precio unidad: {item.price}</strong>
              </p>
            </div>
            <button
              className="absolute top-2 right-3"
              onClick={() => eliminarProducto(item.id)}
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        ))}
        <div className="flex flex-col items-end">
          <p className="text-md text-center">
            <strong>Total:</strong> {precioTotal()}
          </p>
          <p className="text-md text-center">
            <strong>Cantidad de productos:</strong> {cantidadTotal()}
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <button
            className="w-full md:w-2/6 bg-black text-white font-semibold px-4 py-5 cursor-pointer"
            onClick={vaciarCart}
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 bg-black h-72 p-5 mt-5 md:mt-0">
        <form onSubmit={generateOrder} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={dataForm.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="tel"
            value={dataForm.phone}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={dataForm.email}
            onChange={handleChange}
          />
          <br />
          {/* <button>Generar Orden</button> */}
          <button disabled={ordenFinalizada === true} className="bg-white">{ordenFinalizada ? "Gracias" : "Terminar Compra"} </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="container mx-auto flex flex-col items-center py-52">
      <div className="flex flex-row items-center px-5">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Oh no, no hay items en tu carrito{" "}
        </h1>
        <EmojiSadIcon className="w-11 h-11 md:w-9 md:h-9 ml-2" />
      </div>
      <Link to={`/`}>
        <button className="mt-10 bg-gray-800 w-full text-white font-semibold px-4 py-5 cursor-pointer ease-in-out duration-300 md:py-4 hover:bg-gray-700">
          Volver a comprar
        </button>
      </Link>
    </div>
  );
}

export default Cart;
