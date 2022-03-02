import ItemCount from "./ItemCount"

const ItemListContainer = () => {
  return (
    <div className=" bg-white shadow-md rounded w-1/4 flex-col">  
      <img className="w-full" src="https://hmchile.vtexassets.com/arquivos/ids/3260879-600-900?v=637790853930000000&width=600&height=900&aspect=true" alt="" />
      <ItemCount stock={5}/> 
    </div>
  )
}

export default ItemListContainer