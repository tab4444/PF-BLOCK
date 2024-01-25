import React from 'react'


const ItemListContainer = () => {
 return (
        <div className='flex flex-row gap-x-10 p-10 bg-black justify-center items-center min-h-screen-nav'>
            <div className="flex flex-col gap-y-5 uppercase text-white">
                <h2 className='font-montserrat text-2xl text-center'>bienvenidos</h2>
                <hr className='border-b-2 border-green-500'/>
                <h1 className='text-5xl text-center font-playfair max-w-lg font-extrabold'>a la mejor tienda de electronicos en argentina</h1>
            </div>
        </div>
    )
}

export default ItemListContainer