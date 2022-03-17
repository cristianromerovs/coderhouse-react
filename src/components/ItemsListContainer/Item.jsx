import { HeartIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount";

export const Item = ({ id, title, price, img, stock }) => {
//   const onAdd = (cantidad) => {
//     console.log(
//       `Agregaste al carrito: \n${title}\nCantidad: ${cantidad}\nPrecio Unitario: ${price}`
//     );
//   };

  return (
    <Link
      to={`/item/${id}`}
      className="flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <img className="w-full" src={img} alt={title} />
      <div className="pt-1 flex flex-row items-center justify-between">
        <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p className="text-sm font-bold">{price}</p>
        </div>
        <HeartIcon className="h-6 w-5 mr-1 text-gray-700 hover:text-red-700"/>
      </div>
      {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} /> */}
    </Link>
  );
};
