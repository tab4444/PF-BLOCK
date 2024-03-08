import React, {useState, createContext} from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarCarrito = ({producto, cantidad}) => {
        console.log(producto);
        console.log(cantidad);
    }

    const eliminarItem = () => {

    }

    const vaciarCarrito = () => {
        
    }

    const cantidadCarrito = () => {

    }

    const totalCarrito = () => {

    }
    return(
        <CartContext.Provider value={{cart, agregarCarrito, total, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;