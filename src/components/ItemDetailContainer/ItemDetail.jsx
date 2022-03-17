import { SelectSize } from "./SelectSize";
import ItemCount from "../ItemsListContainer/ItemCount";

export const ItemDetail = ({ title, price, img1, stock }) => {
  const onAdd = (cantidad) => {
    console.log(
      `Agregaste al carrito: \n${title}\nCantidad: ${cantidad}\nPrecio Unitario: ${price}`
    );
  };

  return (
    <div className="flex flex-col sm:flex-row col-span-12 mt-10">
      <img src={img1} alt={title} className="w-96 h-auto" />
      <div className="flex flex-col md:justify-center py-7 md:py-0 px-5 md:px-10 w-full md:w-1/2 lg:w-2/6">
        <h1 className="text-2xl font-normal">{title}</h1>
        <p className="text-xl font-semibold">{price}</p>
        <p className="text-md font-semibold">Stock: {stock}</p>
        <SelectSize />
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/> 
      </div>
    </div>
  );
};
