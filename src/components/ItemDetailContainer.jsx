import React from 'react'

const ItemDetailContainer = () => {
  return (
    <div className='flex flex-col gap-y-1 justify-center items-center font-montserrat mt-4'>
      <hr className='border-neutral-300 w-screen' />
      <h1 className='uppercase text-xl font-normal'>Monitor 27 Philips Curvo 27E1SCA/55 FHD 75Hz</h1>
      <p className='text-neutral-400'>monitores</p>
      <div className="flex flex-row gap-x-2 items-center">
        <img className='w-96' src="https://www.venex.com.ar/products_images/1639157228_moni.png" alt="" />
        <hr className='border border-neutral-100 h-72' />
        <div className="flex flex-col gap-y-2">
          <h2 className='text-3xl'>$243000</h2>
          <h3>Stock: 4</h3>
          <div className="flex flex-row gap-x-4">
            <input className='max-w-16 h-12 bg-neutral-200 rounded-lg p-2 text-xl' type="number" name="" id="" value="1"/>
            <button className='w-32 h-12 bg-green-500 rounded-md text-white font-medium hover:bg-green-600'>Comprar</button>
          </div>
        </div>
      </div>
      <hr />
      <h2 className='text-xl'>Descripción:</h2>
      <p className='text-sm text-neutral-500'>Resolución: 1920 x 1080 Tamaño de pantalla: 27 pulgadas Frecuencia de actualización: 75Hz</p>
    </div>
  )
}

export default ItemDetailContainer
