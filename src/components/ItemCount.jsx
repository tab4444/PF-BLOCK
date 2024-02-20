import { useState } from "react";

const ItemCount = () => {
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
        // alert("agregaste esta cantidad de productos: " +  contador);
    }
    return (
        <div>
            <h1>Contador</h1>
            <p>Contador: {contador} </p>

            <button onClick={decrementar}>-</button>
            <button onClick={agregarAlCarrito}>agregar al carrito</button>
            <button onClick={incrementar}>+</button>
        </div>
    );
};

export default ItemCount;
