import CommentComponent from "../display/CommentComponent";

interface ExplicacaoProps{
    text : string
    name : string
}

const Explicacao: React.FC<ExplicacaoProps> = ({
    text,name
}) => {
    return(
        <div className="border p-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Você gostaria de explicar por que essa é a alternativa correta?
            </label>
            <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."></textarea>
        </div>
    )
}

export default Explicacao;