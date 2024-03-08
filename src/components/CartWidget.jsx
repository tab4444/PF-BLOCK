import React, {useContext} from "react";
import { SlBag } from "react-icons/sl";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
    return (
        <div className="flex flex-row">
            <SlBag className="cursor-pointer text-2xl"/>
            <p className="text-xs relative top-1.5 left--1">{cantidadTotal == 0 ? null : cantidadTotal}</p>
        </div>
    );  
};

export default CartWidget;