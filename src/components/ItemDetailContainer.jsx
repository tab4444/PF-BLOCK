import React, {useState, useEffect, useContext} from 'react'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

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
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
