import { useCartContext } from "../../context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const CartWidget = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <div className="relative flex">
      <ShoppingCartIcon className="h-6 w-6 "/>
        {cantidadTotal() > 0 && (
          <div className="absolute left-6  md:left-5 top-1 md:-top-2 md:-right-3 font-bold text-xs text-white bg-violet-600 h-4 w-4 flex justify-center items-center rounded-xl">{cantidadTotal()}</div>
        )}
    </div>
  );
};

export default CartWidget;
