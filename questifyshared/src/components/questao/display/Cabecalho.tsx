import React from 'react';

interface CabecalhoProps{
    id : number
    assunto : string
    autor? : string
}

const Cabecalho: React.FC<CabecalhoProps> = ({id , assunto , autor}) => {
    return (
        <div className='flex justify-between items-center font-bold'>
            <div>
                <span>Questão - {id}</span>
            </div>

            <span className='absolute left-1/2 transform -translate-x-1/2 text-center'>{assunto}</span>

            <span>Autor : {autor}</span>
        </div>
    );
};
  
export default Cabecalho;