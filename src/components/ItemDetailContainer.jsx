import React from 'react'

const ItemDetailContainer = () => {
  return (
    <div className='flex flex-col gap-y-1 justify-center items-center'>
      <h1 className='uppercase font-light'>Monitor 27 Philips Curvo 27E1SCA/55 FHD 75Hz</h1>
      <p>monitores</p>
      <div className="flex flex-row gap-x-2">
        <img src="https://www.venex.com.ar/products_images/1639157228_moni.png" alt="" />
        <hr />
        <div className="flex flex-col gap-y-2">
          <h2>$243000</h2>
          <h3>stock: 4</h3>
          <div className="flex flex-row gap-x-1">botones de cantidad y comprar</div>
        </div>
      </div>
      <hr />
      <h2>Descripción:</h2>
      <p>Resolución: 1920 x 1080 Tamaño de pantalla: 27 pulgadas Frecuencia de actualización: 75Hz</p>
    </div>
  )
}

export default ItemDetailContainer
