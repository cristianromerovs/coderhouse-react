import { Item } from './Item';

export const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => 
            <Item {...item} key={item.id} />
        )}
        </>
    );
    }