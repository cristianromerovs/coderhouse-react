import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { stock } from "../../data/stock";
import { listarArray } from "../helpers/listarArray";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const {idCategory} = useParams();

  useEffect(() => {
    setLoading(true);
    listarArray(stock)
      .then((res) => {
        idCategory ? 
        setItems(res.filter(item => item.category === idCategory))
        :
        setItems(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [idCategory]);

  return loading ? (
    <Loading />
  ) : (
    <div className="container w-full grid grid-cols-12 mx-auto gap-5 md:gap-10">
      <ItemList items={items} />
    </div>
  );
};

