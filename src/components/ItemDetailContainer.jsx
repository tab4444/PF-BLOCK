import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
        try{
        const response = await fetch("/productos.json");
        const data = await response.json();
        const producto = data.find((p)=>p.id == id)
        setProducto(producto);
        }catch(err){
        console.log("Error en el fetch" + err);
        }
    }
    fetchData();

    },[]);

  return (
    <div className="flex justify-center items-center bg-neutral-200">
      <div className='flex flex-col gap-y-1 justify-center items-center font-montserrat m-4 bg-neutral-100 p-16 max-w-screen-md rounded-md'>
      <hr className='border-neutral-300 w-full' />
      <h1 className='uppercase text-xl font-normal'>{producto.nombre}</h1>
      <p className='text-neutral-400'>{producto.tipo}</p>
      <div className="flex flex-row gap-x-2 items-center">
        <img className='w-96' src={producto.imagen} alt="" />
        <hr className='border border-neutral-100 h-72' />
        <div className="flex flex-col gap-y-2">
          <h2 className='text-3xl'>${producto.precio}</h2>
          <h3>Stock: {producto.stock}</h3>
          <ItemCount producto={producto} inicial={1}/>
        </div>
      </div>
      <hr />
      <h2 className='text-xl'>Descripción:</h2>
      <p className='text-sm text-neutral-500'>{producto.descripcion}</p>
    </div>
    </div>
  )
}

export default ItemDetailContainer
