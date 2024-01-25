import React from "react";
import { SlBag } from "react-icons/sl";

const CartWidget = () => {
    return (
        <div className="flex flex-row">
            <SlBag className="cursor-pointer text-2xl"/>
            <p className="text-xs relative top-1.5 left--1">0</p>
        </div>
    );  
};

export default CartWidget;