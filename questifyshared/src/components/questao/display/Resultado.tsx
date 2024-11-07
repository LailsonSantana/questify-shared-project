import React from 'react';

interface ResultadoProps{
    isCorrect: boolean
}

const Resultado: React.FC<ResultadoProps> = ({isCorrect}) => {
    return(
        <div className={`p-2 rounded-md flex items-center ${isCorrect ? 'bg-[#dcfce7] border-[#dcfce7] text-[#047857]' : 'bg-[#fda4af] border-[#fda4af] text-[#be123c]'}`}>
        {isCorrect ? (
          <>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-12l-2 2 1 1 1-1 3-3-1-1-2 2z" />
            </svg>
            <span>Alternativa Correta</span>
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-9v-3h2v3h-2zm0 4v-2h2v2h-2z" />
            </svg>
            <span>Alternativa Incorreta</span>
          </>
        )}
      </div>      
    );
}

export default Resultado;