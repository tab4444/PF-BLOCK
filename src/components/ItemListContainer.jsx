import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = ({saludo}) => {
    
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const db = getFirestore()

        const misProductos = 
        categoryId ?
        query(collection(db,"producto"),where("categoria","==",categoryId))
        :
        collection(db,"producto")

        getDocs(misProductos)
        .then((res)=>{
            const nuevosProductos = res.docs.map((doc) => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProductos(nuevosProductos)
        })
        .catch((err)=> {
            console.log(err);
        })
    },[categoryId]);

    return (
        <div className='flex flex-col gap-y-10 p-10 bg-black justify-center items-center min-h-screen-nav'>
            <div className="flex flex-col gap-y-5 uppercase text-white">
                <h2 className='font-montserrat text-2xl text-center'>bienvenidos</h2>
                <hr className='border-b-2 border-green-500'/>
                <h1 className='text-5xl text-center font-playfair max-w-2xl font-extrabold'>{saludo}</h1>
            </div>

            {productos.length == 0
            ? 
            <h1>cargando...</h1>
            : 
            <div className="flex flex-row gap-4 flex-wrap justify-center">
                    <ItemList productos={productos}/>
            </div>
            }     
        </div>
    )
}

export default ItemListContainer;