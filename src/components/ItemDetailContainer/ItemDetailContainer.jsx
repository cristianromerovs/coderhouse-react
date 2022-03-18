import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { stock } from "../../data/stock";
import { listarArray } from "../helpers/listarArray";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {idItem} = useParams();

    useEffect(() => {
        setLoading(true);
        listarArray(stock)
            .then((res) => {
                setItem(res.find((item) => item.id === parseInt(idItem)));
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            })
    }, [idItem]);

    return (
        <div className="container mx-auto w-full">
            {
                loading?
                <div className="container mx-auto flex justify-center items-center py-72">
                    <h3 className="font-bold text-3xl text-gray-900">Cargando...</h3>
                </div>
                :
                <ItemDetail {...item} />
            }
        </div>
    )
}