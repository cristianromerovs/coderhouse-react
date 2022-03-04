import React from "react";
import ItemCount from "./ItemCount";

export const Item = ({ title, price, img, stock }) => {
    const onAdd = (cantidad) => {
        // cantidad === 1
        // ? console.log(`producto agregado ID: ${id}`)
        // : console.log(`Agregaste al carrito: ${cantidad} productos.`);

        console.log(`Agregaste al carrito: \n${title}\nCantidad: ${cantidad}\nPrecio Unitario: ${price}`);
    };

    return (
        <div className=" bg-white shadow-md rounded flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <img className="w-full" src={img} alt="" />
                <div className="px-3 pt-3">
                    <p>{title}</p>
                    <p className="font-bold">{price}</p>
                </div>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    );
};
