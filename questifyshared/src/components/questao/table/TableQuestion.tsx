import React from 'react';
import TableLine from './TableLine';

interface TableQuestionProps{

}

const TableQuestion: React.FC<TableQuestionProps> = () => {
    return (
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Código
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Enunciado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data de Criação
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Disciplina
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableLine codigo='QN1' enunciado='Durante os estudos de matemática financeira ...' data_criacao='24/10/2024'
                               disciplina='Discreta'
                    />
                    <TableLine codigo='QN2' enunciado='Durante os estudos de matemática financeira ...' data_criacao='24/10/2024'
                               disciplina='Compiladores'
                    />
                    <TableLine codigo='QN3' enunciado='Durante os estudos de matemática financeira ...' data_criacao='24/10/2024'
                                disciplina='Teoria dos Grafos'
                    />
                    <TableLine codigo='QN4' enunciado='Durante os estudos de matemática financeira ...' data_criacao='24/10/2024'
                                disciplina='Análise de Algoritmos'
                    />
                    <TableLine codigo='QN5' enunciado='Durante os estudos de matemática financeira ...' data_criacao='24/10/2024'
                                disciplina='Cálculo I'
                    />
                    
                </tbody>
            </table>
        </div>
    );
};
  
export default TableQuestion;