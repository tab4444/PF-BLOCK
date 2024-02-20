import {useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({saludo}) => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try{
        const response = await fetch("./productos.json");
        const data = await response.json();
        setProductos(data);
        }catch(err){
        console.log("Error en el fetch" + err);
        }
    }
    fetchData();

    },[])

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