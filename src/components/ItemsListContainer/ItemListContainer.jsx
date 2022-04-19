import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore()
    if (idCategory) {
        const queryCollection = collection(db, 'items')
        const queryFilter = query( queryCollection, where('category', '==', idCategory)  )
        getDocs(queryFilter)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    }else{
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setItems( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))             
    }
}, [idCategory])

  return loading ? (
    <Loading />
  ) : (
    <div className="md:container w-full grid grid-cols-12 mx-auto gap-5 px-5 md:px-0 md:gap-10">
      <ItemList items={items} />
    </div>
  );
};
