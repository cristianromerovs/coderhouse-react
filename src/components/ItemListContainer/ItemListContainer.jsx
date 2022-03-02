import ItemCount from "./ItemCount"

const ItemListContainer = () => {
  let img__item1 = "https://hmchile.vtexassets.com/arquivos/ids/3260879-600-900?v=637790853930000000&width=600&height=900&aspect=true";

  return (
    <div className=" bg-white shadow-md rounded flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">  
      <img className="w-full" src={img__item1} alt="" />
      <div className="px-3 pt-3">
        <p>Sudadera Regular fit</p>
        <p className="font-bold">$19.990</p>
      </div>
      <ItemCount stock={5}/> 
    </div>
  )
}

export default ItemListContainer