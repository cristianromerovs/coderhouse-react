import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const AddItem = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const RemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const agregar = () => {
    onAdd(count);
  }

  return (
    <>
      <div className="flex justify-around items-center py-1 mt-10 font-extrabold">
        <button
          disabled={count === 0}
          onClick={RemoveItem}
          className="text-md"
        >
          -
        </button>
        <p className="text-md font-semibold">{count}</p>
        <button
          disabled={count === stock}
          onClick={AddItem}
          className="text-md"
        >
          +
        </button>
      </div>
      <div>
        <button
          disabled={count === 0}
          onClick={ agregar }
          className="bg-gray-700 w-full text-white font-semibold px-4 py-5 cursor-pointer ease-in-out duration-300 md:py-4 hover:bg-gray-900"
        >
          Agregar al carro
        </button>
      </div>
    </>
  );
};
