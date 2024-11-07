'use client'

import { Template } from "@/components/Template"
import { useQuestionService } from '@/resources/question/question.service'
import { useEffect, useState } from 'react'
import { Question } from "@/resources/question/question.resource"
import QuestionComponent from "@/components/questao/display/QuestionComponent"
import ButtonB from "@/components/button/Button"
import MultipleSelectCheckmarks from "@/components/questao/create/SeletorDisciplina"

export default function QuestoesPage(){

    const useServiceQuestion = useQuestionService();
    const [questions , setQuestions] = useState<Question[]>([])
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        searchQuestions();
    }, []);

    if (!hasMounted) {
        return null; 
    }

    async function searchQuestions() {
        const result = await useServiceQuestion.getAllQuestions();
        setQuestions(result);
        console.log("FORMATO DA QUESTÃO")
        console.table(result)
    }

    async function subjectFilter(discipline : string){
        const result = await useServiceQuestion.filterQuestions(discipline);
    }

    function mapperQuestion(question : Question){
        return(
            <div key={question.id}>
                <QuestionComponent id={question.id!}
                                   enunciado={question.statement} 
                                   answers={question.answers}
                                   discipline={question.discipline}
                                   nameUser={question.nameUser}>
                </QuestionComponent>
            </div>        
        );
    }

    function mapperQuestions(){
        return(
            questions.map(mapperQuestion)
        )
    }

    return (
        <Template>
            <section className='flex flex-col items-center justify-center my-5'>
                    <div className="flex items-center space-x-4">
                        
                        <MultipleSelectCheckmarks />

                        <ButtonB label="Buscar" onClick={subjectFilter} />
                    </div>
            </section>


            <section className='grid grid-cols-1'>
                {
                    mapperQuestions()
                }
            </section>
        </Template>
    ) 
}