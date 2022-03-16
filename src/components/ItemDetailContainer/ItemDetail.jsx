import { SelectSize } from './SelectSize';

export const ItemDetail = ({ title, price, img, stock }) => {
  return (
    <div className="flex flex-col md:flex-row col-span-12 mt-10">
      <img src={img} alt={title} className="w-96 h-auto" />
      <div className="flex-col pl-10">
        <h1 className="text-2xl font-normal">{title}</h1>
        <p className="text-xl font-semibold">{price}</p>
        <p className="text-md font-semibold">Stock: {stock}</p>
        <SelectSize />
      </div>
    </div>
  );
};
