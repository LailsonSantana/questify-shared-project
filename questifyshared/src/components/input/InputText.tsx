import React from "react";

interface InputTextProps{
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    label?: string;
    placeholder?: string;
    id?: string;
    value?: string
    type?: string
}
//
export const InputText: React.FC<InputTextProps> = ({
    onChange , style , placeholder , id , value , type = "text"
} : InputTextProps) => {
    return(
        <input type={type}
               onChange={onChange}
               placeholder={placeholder}
               id={id}
               value={value}
               className={`${style} border px-3 py-2 rounded-lg text-gray-900`}
        />
        
    );
}