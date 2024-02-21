import { IoEyeOutline } from "react-icons/io5";

const ItemList = ({productos, verDetalles}) => {
    return (

        productos.map((producto) => {
            return(
                <div className="bg-neutral-50 rounded p-3 w-64 font-montserrat flex flex-col gap-y-2" key={producto.id}>
                    <img className="w-64" src={producto.imagen} alt={producto.nombre} width={800} height={400} />
                    <hr />
                    <p>{producto.nombre}</p>     
                    <p className="text-neutral-500">{producto.tipo}</p>            
                    <p className="font-bold text-lg">${producto.precio}</p>
                    <button className="flex flex-row gap-0 items-center border justify-center rounded-md gap-x-2 uppercase text-sm hover:bg-neutral-100" onClick={() => verDetalles(producto)}>ver detalles<IoEyeOutline /></button>
                </div>
            )
        })
    )
}

export default ItemList