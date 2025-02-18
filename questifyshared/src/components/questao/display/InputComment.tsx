import { CommentResponse } from '@/resources/comment/commentResponse.resource';
import React, { useState } from 'react';

interface InputCommentProps{
    onClick: (comment: CommentResponse) => void;
    userId: number;
    questionId: number;
    
}

const InputComment: React.FC<InputCommentProps> = ({onClick, userId, questionId}) => {
    const [commentText, setCommentText] = useState<string>("");

    // Função para lidar com a submissão do comentário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  // Previne o comportamento padrão do formulário

        const newComment = new CommentResponse(commentText, userId , questionId)
        onClick(newComment);  // Chama a função `saveComment` passando o comentário criado
        setCommentText("");   // Limpa o campo após a submissão
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">Seu comentário</label>
                    <textarea 
                        id="comment" 
                        rows={4} 
                        className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 px-4 py-2 placeholder:opacity-50" 
                        placeholder="Escreva um comentário..." 
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}  // Atualiza o estado quando o usuário digita
                    ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" 
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                        Comentar
                    </button>
                    <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                        <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                </svg>
                            <span className="sr-only">Attach file</span>
                        </button>
                        <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                            <span className="sr-only">Set location</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>   
    );
};
  
export default InputComment;