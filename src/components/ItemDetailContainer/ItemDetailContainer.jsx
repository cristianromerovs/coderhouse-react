import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../ItemsListContainer/Loading";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {idItem} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const queryDb = doc(db, "items", idItem);
        getDoc(queryDb)
        .then((resp) => setItem({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err))
        .finally(() =>setLoading(false))
    }, [idItem]);

    return (
        <div className="container mx-auto w-full">
            {
                loading?
                <Loading />
                :
                <ItemDetail {...item} />
            }
        </div>
    )
}