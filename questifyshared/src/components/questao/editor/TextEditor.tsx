'use client';

import { useState } from 'react';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useQuestionService } from '@/resources';

// Importar Editor dinamicamente para evitar execução no lado do servidor
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
    ssr: false // Desativa a renderização do lado do servidor para este componente
});

interface TextEditorProps {
    onChange: (content: string) => void;
    onValidationError?: (error: string) => void; // Callback para erro de validação
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange, onValidationError}) => {
    
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // Função para capturar mudanças no estado do editor
    const onEditorStateChange = (newState: EditorState) => {
        setEditorState(newState);
        const contentState = newState.getCurrentContent();
        validateContent(contentState); // Valida o conteúdo sempre que o estado do editor muda
    };

    // Função para validar o conteúdo
    const validateContent = (content: ContentState) => {
        const plainText = content.getPlainText().trim(); // Extrai o texto sem formatação
        if (!plainText) {
            onValidationError?.('O texto não pode estar vazio.'); // Chama o callback se definido
            console.log("PARECE QUE TEMOS UM TEXTO VAZIO")
            return false;
        }
        onChange(JSON.stringify(convertToRaw(content))); // Envia o conteúdo se válido
        return true;
    };

    return (
        <div className="border border-gray-300 rounded shadow-inner bg-white w-10/12 h-full m-auto">
            {/*style={{ width: '580px', height: '460px' }}*/}
            <div className="text-editor h-full">
                <div className="editor h-full overflow-y-auto p-6">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        placeholder="Digite o enunciado da sua questão aqui:"
                        toolbar={{
                            options: ['inline', 'list', 'textAlign', 'link', 'history'],
                            inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
                        }}
                       // editorClassName="h-full w-full"

                    />
                </div>
            </div>
        </div>
    );
};

export default TextEditor;



