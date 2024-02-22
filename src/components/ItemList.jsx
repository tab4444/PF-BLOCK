import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ItemList = ({productos}) => {
    return (
        productos.map((producto) => {
            return(
                <Link to={`/producto/${producto.id}`} className="bg-neutral-50 rounded p-3 w-64 font-montserrat flex flex-col gap-y-2" key={producto.id}>
                    <img className="w-64" src={producto.imagen} alt={producto.nombre} width={800} height={400} />
                    <hr />
                    <p>{producto.nombre}</p>     
                    <p className="text-neutral-500">{producto.tipo}</p>            
                    <p className="font-bold text-lg">${producto.precio}</p>
                </Link>
            )
        })
    )
}

export default ItemList