import React from "react";

interface ButtonProps{
    onClick?: (event : any) => void;
    label?: string;
    type?: "submit" | "button" | "reset" | undefined
}
//className="px-8 mt-4 py-2 bg-[#818cf8] text-white rounded-md shadow hover:bg-[#3730a3]">
const ButtonB: React.FC<ButtonProps> = ({onClick,label,type} : ButtonProps) => {
    return(
        
        <button className="mt-3 mr-24 mb-2.5 text-white bg-[#9B91D4] hover:bg-[#42389D] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        
                type={type}
                onClick={onClick}>
                { label }
        </button>
    );
}

export default ButtonB;