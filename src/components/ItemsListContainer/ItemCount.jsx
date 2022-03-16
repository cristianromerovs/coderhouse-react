import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const AddItem = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const RemoveItem = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <div className="flex justify-around items-center py-3 font-extrabold">
        <button
          disabled={cantidad === 0}
          onClick={RemoveItem}
          className="text-xl"
        >
          -
        </button>
        <p>{cantidad}</p>
        <button
          disabled={cantidad === stock}
          onClick={AddItem}
          className="text-xl"
        >
          +
        </button>
      </div>
      <div>
        <button
          disabled={cantidad === 0}
          onClick={() => onAdd(cantidad)}
          className="bg-gray-700 w-full text-white font-semibold px-4 py-5 cursor-pointer ease-in-out duration-300 md:py-4 hover:bg-gray-900"
        >
          Agregar al carro
        </button>
      </div>
    </>
  );
};

export default ItemCount;
