import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import React from 'react';

interface EnunciadoProps {
  text: string
}

const Enunciado: React.FC<EnunciadoProps> = ({text}) => {

  //const contentState = convertFromRaw(JSON.parse(text)); // Aqui assumo que `text` é o JSON salvo
  //const htmlContent = stateToHTML(contentState);
  return (

    <div>
      {/*<span className='text-md font-bold' dangerouslySetInnerHTML={{ __html: htmlContent }} />*/}
        <span>{text}</span>
    </div>
  );
};

export default Enunciado;