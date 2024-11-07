'use client'

interface TableLineProps{
    codigo: string
    enunciado?: string
    data_criacao?: string
    disciplina?: string
}

const TableLine: React.FC<TableLineProps> = ({codigo , enunciado, data_criacao , disciplina}) => {
    return(
        <tr>
            <td className="px-6 py-4">
                {codigo}
            </td>

            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    {enunciado}
                </a>
            </th>

            <td className="px-6 py-4">
                {data_criacao}
            </td>

            <td className="px-6 py-4">
                {disciplina}
            </td>

            <td className="px-6 py-4">

            </td>
        </tr>
    );
}

export default TableLine;