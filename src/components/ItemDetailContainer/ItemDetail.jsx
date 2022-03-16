import { SelectSize } from "./SelectSize";

export const ItemDetail = ({ title, price, img, stock }) => {
  return (
    <div className="flex flex-col sm:flex-row col-span-12 mt-10">
      <img src={img} alt={title} className="w-96 h-auto" />
      <div className="flex flex-col md:justify-center py-7 md:py-0 px-5 md:px-10 w-full md:w-1/2 lg:w-2/6">
        <h1 className="text-2xl font-normal">{title}</h1>
        <p className="text-xl font-semibold">{price}</p>
        <p className="text-md font-semibold">Stock: {stock}</p>
        <SelectSize />
        <button className="bg-gray-700 w-full text-white font-semibold mt-10 px-4 py-5 cursor-pointer ease-in-out duration-300 md:py-4 hover:bg-gray-900">
          Agregar al carro
        </button>
      </div>
    </div>
  );
};
