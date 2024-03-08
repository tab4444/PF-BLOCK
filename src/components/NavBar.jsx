import React from 'react'
import CartWidget from './CartWidget'
import { SlMagnifier } from "react-icons/sl";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav className="flex flex-row gap-x-4 items-center justify-between w-full bg-black text-white pr-10 pl-10 text-xl">
            <SlMagnifier className='cursor-pointer'/>
            <Link to={"/  "}><img className='w-48' src="/img/logo-black.png" alt="logo thiago block" /></Link>
            <CartWidget/>
        </nav>
        <ul className="flex flex-row gap-x-5 items-center justify-center capitalize font-montserrat font-medium text-sm p-2 bg-black border-b-8 border-green-500">
            <li className="cursor-pointer text-white hover:text-neutral-300"><NavLink to={"/"}>Inicio</NavLink></li>
            <li className="cursor-pointer text-white hover:text-neutral-300"><NavLink to={"/categoria/componente"}>Componentes de PC</NavLink></li>
            <li className="cursor-pointer text-white hover:text-neutral-300"><NavLink to={"/categoria/periferico"}>Perifericos</NavLink></li>
            <li className="cursor-pointer text-white hover:text-neutral-300"><NavLink to={"/categoria/monitor"}>Monitores</NavLink></li>
            <li className="cursor-pointer text-white hover:text-neutral-300"><NavLink to={"/categoria/notebook"}>Notebooks</NavLink></li>
        </ul>
    </>
    )
}

export default NavBar