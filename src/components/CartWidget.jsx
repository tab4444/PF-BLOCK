import React, {useContext} from "react";
import { SlBag } from "react-icons/sl";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <Link to={"/carrito"}>
        <div className="flex flex-row">
            <SlBag className="cursor-pointer text-2xl"/>
            <p className="text-xs relative top-1.5 left--1">{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </div>
        </Link>
    );  
};

export default CartWidget;