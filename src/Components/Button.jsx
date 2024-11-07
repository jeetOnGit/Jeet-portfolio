import React from "react";
import { Link } from "react-router-dom";

const Button = ({children, className}) => {
    return(
        <>
            <button className={`border border-[#7B66EE] px-6 py-1 rounded-full  transition-all ${className}`}>
                <Link>{children}</Link> 
            </button> 
        </>
    )
}

export default Button;