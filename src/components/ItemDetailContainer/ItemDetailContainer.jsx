import React, { useEffect, useState } from "react";
import { stock } from "../../data/stock";
import { getStock } from "../helpers/getStock";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getStock(stock)
            .then((res) => {
                setItem(res.find((item) => item.id === 2));
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <div className="container mx-auto w-full">
            {
                loading?
                <div><h1>Cargando2</h1></div>
                :
                <ItemDetail {...item} />
            }
        </div>
    )
}