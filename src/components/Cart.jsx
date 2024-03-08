import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {

  const {cart} = useContext(CartContext)
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
      {cart.map((p) => {
        <CartItem key={p.id} producto={p} />
      })}
      </>
      }
    </div>
  )
}

export default Cart