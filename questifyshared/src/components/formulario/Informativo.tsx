import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InformativoProps{
    text:string
}

const Informativo: React.FC<InformativoProps> = ({text}) => {
    return (
        <div className='m-4'>
            <div className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 flex items-center">
                <FaInfoCircle className="text-blue-500 mr-2" /> {/* Ícone aqui */}
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
};
  
export default Informativo;