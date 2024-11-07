import React from 'react';
import ButtonB from '../button/Button';

interface ClassCardProps {
  label: string;
  title: string;
  imageUrl?: string; // Novo campo para imagem
  onClick?:  (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ title, label, imageUrl , onClick }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out bg-containerColor text-white">
      {/* Imagem */}
      <div className="h-72 overflow-hidden rounded-t-lg shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-fit" // object-cover 
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-titllecolor">{title}</h3>
        <ButtonB label={label} onClick={onClick}/>
      </div>
    </div>
  );
};

export default ClassCard;
