import Alternativa from "./Alternativa";
import Enunciado from "./Enunciado";
import { useState } from "react";
import Resultado from "./Resultado";
import { RenderIf } from "../../Template";
import Cabecalho from "./Cabecalho";
import BasicTabs from "./BasicTabs";
import ButtonB from "@/components/button/Button";

interface Answer{
    text: string;
    isCorrect: boolean;
}
interface QuestionComponentProps{
    id: number
    enunciado: string
    answers: Answer[]
    nameUser: string
    discipline: string
}

const indexToLetter = (index: number): string => {
    return String.fromCharCode(65 + index); // 65 é o código ASCII para 'A'
};


export const QuestionComponent: React.FC<QuestionComponentProps> = ({id,enunciado,answers,nameUser,discipline} : QuestionComponentProps) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const handleSelect = (index: number) => {
        setSelectedAnswerIndex(index);
    };

    const handleSubmit = () => {
        if (selectedAnswerIndex !== null) {
          const selectedAnswer = answers[selectedAnswerIndex];
          // Verifica se a resposta selecionada está correta
          console.log('Resposta selecionada:', selectedAnswer);
          console.log('Está correta?', selectedAnswer.isCorrect);
          setIsCorrect(selectedAnswer.isCorrect)
          setIsSubmitted(true);
        } else {
          console.log('Nenhuma resposta selecionada.');
        }
    };

    return(

        <div className="m-8">
            <div className='border border-gray-300 rounded p-4 shadow-md bg-[#FFFDF2]'>
                <Cabecalho id={id} assunto={discipline} autor={nameUser}></Cabecalho>
            </div>

            <div className='border border-gray-300 rounded p-8 shadow-md bg-[#FFFDF2]'>
                <Enunciado text={`${enunciado}`}/>
                <div className="pt-4">
                    <ul>
                        {answers?.map((answer, index) => (
                            <li key={index} className={answer.isCorrect ? 'correct' : 'incorrect'}>
                                <div className="flex space-x-2 mt-3 " style={{ paddingLeft: '25px' }}>
                                    <Alternativa circleLabel={indexToLetter(index)} 
                                                value="optionA" text={answer.text}
                                                type="submit"
                                                onClick={() => handleSelect(index)}
                                                isSelected={selectedAnswerIndex === index}    />  
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10 flex items-center mt-8">
                    <ButtonB type="button" onClick={handleSubmit} label="Responder"></ButtonB>
                
                    <RenderIf condition={isSubmitted}>
                        
                        <Resultado isCorrect={isCorrect!}/>
                        
                    </RenderIf>
                </div>
            </div>

            <div className="border border-gray-300 rounded p-4 shadow-md bg-[#FFFDF2]">
                <BasicTabs questionId={id}></BasicTabs>
            </div>
        </div>
    )
}

export default QuestionComponent;