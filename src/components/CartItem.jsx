import React from 'react'


const CartItem = ({producto, eliminarItem}) => {
  return (
    <div>
      <h3>{producto.producto.nombre}</h3>

      <img src={producto.producto.imagen} alt={producto.producto.nombre} />
      <p>Cantidad: {producto.cantidad}</p>
      <p>Valor c/u: ${producto.producto.precio * producto.cantidad}</p>
      <button onClick={() => eliminarItem(producto.producto.id)}>eliminar producto</button>
    </div>
  )
}

export default CartItem