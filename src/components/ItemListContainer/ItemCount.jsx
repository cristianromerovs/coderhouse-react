import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const handleCount =()=> {
        setCount(count + 1);
    }

  return (
    <div>
        <p>Contador: { count }</p>
        <button onClick={ handleCount }>ClickMe</button>
    </div>
  )
}

export default ItemCount;