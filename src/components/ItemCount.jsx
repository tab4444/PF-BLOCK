import { useState } from "react";

const ItemCount = ({producto, inicial}) => {
    const [contador, setContador] = useState(1);

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }
    const incrementar = () => {
        if(contador >= 1){
            setContador(contador + 1)
        }
    }
    const agregarAlCarrito = () => {
        // Al guardar en el carrito, necesito que los elementos no se eliminen, por lo que uso el hook useRef() (ver clase 6 35:20)
        alert(`Compraste ${producto.stock} ${producto.nombre}`);
    }
    return (
        <div className="flex flex-row gap-x-4">
            <input className='max-w-16 h-12 bg-neutral-200 rounded-lg p-2 text-xl' type="number" defaultValue={inicial} min={inicial}  max={producto.stock}/>
            <button className='w-32 h-12 bg-green-500 rounded-md text-white font-medium hover:bg-green-600' onClick={agregarAlCarrito}>Comprar</button>
        </div>
    );
};

export default ItemCount;
