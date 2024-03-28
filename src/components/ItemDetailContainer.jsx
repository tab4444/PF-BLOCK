import React, {useState, useEffect, useContext} from 'react'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const nuevoDoc = doc(db, "producto", id);
    
    getDoc(nuevoDoc)
    .then(res=>{
      const data = res.data()
      const nuevoProducto = {id: res.id,...data}
      setProducto(nuevoProducto)
    })
    },[]);

  return (
    <div className="flex justify-center items-center bg-neutral-200">
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
