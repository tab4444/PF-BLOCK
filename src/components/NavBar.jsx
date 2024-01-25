import React from 'react'
import CartWidget from './CartWidget'
import { SlMagnifier } from "react-icons/sl";

const NavBar = () => {
    return (
        <nav className="flex flex-row gap-x-4 items-center justify-between w-full bg-black text-white pr-10 pl-10 text-xl">
            <SlMagnifier className='cursor-pointer'/>
            <img className='w-48' src="../../public/img/logo-black.png" alt="logo thiago block" />
            <CartWidget/>
        </nav>
    )
}

export default NavBar