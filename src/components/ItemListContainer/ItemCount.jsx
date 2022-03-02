import { useState } from 'react';

const ItemCount = (prop) => {
    const [count, setCount] = useState(0);

    const AddItem = () => {
        if (count < prop.stock) {
            setCount(count + 1);
        }
    }

    const RemoveItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className='flex justify-around items-center py-5 font-extrabold'>
            <button onClick={ RemoveItem } className="text-xl" >-</button>
            <p>{ count }</p>
            <button onClick={ AddItem } className="text-xl" >+</button>
        </div>
    )
}

export default ItemCount;