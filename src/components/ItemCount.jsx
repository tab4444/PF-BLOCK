import { useState } from "react";

const ItemCount = ({stock, inicial, onAdd}) => {
    const [contador, setContador] = useState(1);

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    
    const agregarAlCarrito = () => {
        onAdd(contador);
    }
    return (
        <div className="flex flex-row gap-x-4">
            {/* <input className='max-w-16 h-12 bg-neutral-200 rounded-lg p-2 text-xl' type="number" defaultValue={inicial} min={inicial}  max={producto.stock}/> */}
            <div className="flex flex-row gap-0 bg-neutral-200 rounded-lg">
                <button className="w-16 text-xl">{contador}</button>
                <div className="flex flex-col gap-0">
                    <button onClick={incrementar} className="pl-2 pr-2 hover:bg-neutral-300">+</button>
                    <button onClick={decrementar} className="pl-2 pr-2 hover:bg-neutral-300">-</button>     
                </div>   
            </div> 
            <button className='w-32 h-12 bg-green-500 rounded-md text-white font-medium hover:bg-green-600' onClick={agregarAlCarrito}>Comprar</button>
        </div>
    );
};

export default ItemCount;
