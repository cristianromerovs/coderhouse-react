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
        <div className='flex justify-between'>
            <button onClick={ RemoveItem }>-</button>
            <p>{ count }</p>
            <button onClick={ AddItem }>+</button>
        </div>
    )
}

export default ItemCount;