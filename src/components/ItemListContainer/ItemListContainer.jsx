import { useState } from "react";
import { useEffect } from "react";
import { stock } from "../data/stock";
import { listarArray } from "../helpers/listarArray";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    listarArray(stock)
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className=" container mx-auto flex justify-center items-center  py-72">
          <h3 className="font-bold text-3xl text-gray-900">Cargando...</h3>
        </div>
      ) : (
        <div className="container w-full grid grid-cols-12 mx-auto gap-5">
          <ItemList items={items} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
