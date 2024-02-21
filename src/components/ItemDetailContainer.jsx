import React from 'react'

const ItemDetailContainer = ({producto}) => {
  return (
    <div className='flex flex-col gap-y-1 justify-center items-center font-montserrat mt-4 bg-neutral-100 p-16 max-w-screen-md rounded-md'>
      <hr className='border-neutral-300 w-full' />
      <h1 className='uppercase text-xl font-normal'>{producto.nombre}</h1>
      <p className='text-neutral-400'>{producto.tipo}</p>
      <div className="flex flex-row gap-x-2 items-center">
        <img className='w-96' src={producto.imagen} alt="" />
        <hr className='border border-neutral-100 h-72' />
        <div className="flex flex-col gap-y-2">
          <h2 className='text-3xl'>${producto.precio}</h2>
          <h3>Stock: {producto.stock}</h3>
          <div className="flex flex-row gap-x-4">
            <input className='max-w-16 h-12 bg-neutral-200 rounded-lg p-2 text-xl' type="number" name="" id="" value="1"/>
            <button className='w-32 h-12 bg-green-500 rounded-md text-white font-medium hover:bg-green-600'>Comprar</button>
          </div>
        </div>
      </div>
      <hr />
      <h2 className='text-xl'>Descripción:</h2>
      <p className='text-sm text-neutral-500'>{producto.descripcion}</p>
    </div>
  )
}

export default ItemDetailContainer
