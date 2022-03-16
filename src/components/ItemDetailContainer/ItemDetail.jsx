export const ItemDetail = ({ title, price, img, stock }) => {
    return (
        <div className="item-detail">
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    )
}