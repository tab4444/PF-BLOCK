import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {

  const {cart, vaciarCarrito, eliminarItem, totalCarrito} = useContext(CartContext)
  return (
    <div>
      {cart.length == 0 
      ? 
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to={"/"}>ir al inicio</Link>
      </>
      :
      <>
        <h1>Lista de carrito</h1>
        {cart.map((p) => (
          <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
        ))}
      <p>Total: ${totalCarrito()}</p>
      <button onClick={vaciarCarrito}>vaciar carrito</button>
      </>
      }
    </div>
  )
}

export default Cart