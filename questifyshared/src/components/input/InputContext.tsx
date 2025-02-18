import React from "react";
import Informativo from "../formulario/Informativo";

interface InputContextProps{
    
}
//
export const InputContext: React.FC<InputContextProps> = ({} : InputContextProps) => {
    return(

        
        <form>
            <Informativo text="Neste campo você deve definir qual será o contexto ou a informação inicial que será passada para o chat
            GPT para que ele possa analisar o enunciado que será enviado pelos alunos" />
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                {/*<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">*/}
                    <label htmlFor="context" className="sr-only">Contexto :</label>
                    <textarea 
                        id="context" 
                        rows={4} 
                        className="w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 px-4 py-2 placeholder:opacity-50" 
                        placeholder="Defina o contexto" 
                        required
                    ></textarea>
                {/*</div>

                {/*<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" 
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                        Definir
                    </button>
                    <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    </div>
                </div>*/}
            </div>
        </form>    
    );
}