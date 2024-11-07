'use client';

import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQuestionService } from "@/resources";
import { Answer, Question } from "@/resources/question/question.resource";
import { Template } from "@/components/Template";
import InputAlternativa from "@/components/questao/create/InputAlternativa";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError } from "./FieldError";
import TextEditor from "@/components/questao/editor/TextEditor";
import ButtonB from "@/components/button/Button";
import Selecionador from "@/components/questao/create/Selecionador";
import ContainerForm from "@/components/formulario/ContainerForm";

export default function InicialPage() {
    const [enunciado, setEnunciado] = useState("");
    const service = useQuestionService();
    const [hasMounted, setHasMounted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const schema = z.object({
        alt1: z.string().nonempty("Esse campo não pode ficar vazio"),
        alt2: z.string().nonempty("Esse campo não pode ficar vazio"),
        alt3: z.string().nonempty("Esse campo não pode ficar vazio"),
        alt4: z.string().nonempty("Esse campo não pode ficar vazio"),
        alt5: z.string().nonempty("Esse campo não pode ficar vazio"),
        select: z.string(),
        correctAnswer: z.string().nonempty("A justificativa não pode ficar vazia")
    });

    const methods = useForm<FormProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    });

    const { handleSubmit, watch, setValue, reset,  formState: { errors } } = methods;

    const correctAnswer = watch('correctAnswer');
    
    const onSelectAlternative = (name: string) => {
        setValue('correctAnswer', name);
    };

    const [justification, setJustification] = useState('');

    const handleSave = async (data: FormProps) => {
        console.log(data);

        const answers: Answer[] = [
            { text: data.alt1, isCorrect: correctAnswer === 'alt1' },
            { text: data.alt2, isCorrect: correctAnswer === 'alt2' },
            { text: data.alt3, isCorrect: correctAnswer === 'alt3' },
            { text: data.alt4, isCorrect: correctAnswer === 'alt4' },
            { text: data.alt5, isCorrect: correctAnswer === 'alt5' },
        ];

        const dados: Question = {
            statement: enunciado,
            discipline: data.select,
            answers: answers,
            userId: 1,
            nameUser: "Nome do Usuário"
        };

        try {
            const location = await service.save(dados);
            alert("Pergunta salva com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar a pergunta:", error);
            alert("Erro ao salvar a pergunta.");
        }

        reset();
    };

    type FormProps = z.infer<typeof schema>;

    if (!hasMounted) {
        return null;
    }

    const handleValidationError = (errorMessage: string) => {
        setError(errorMessage);
    };

    return (
        <Template>
            
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSave)}>
                    <span className="m-4 mt-8 flex flex-col items-center justify-center">
                        <Selecionador register={methods.register} name="select" />
                    </span>

                    <div className="flex flex-col items-center justify-center h-full w-full">
                        
                    <section className="flex items-center w-11/12"> 
                                <ContainerForm>
                                    <div className="flex flex-col items-center mb-8">
                                        <h1 className="text-3xl font-bold text-[#366280]">Desenvolva o Enunciado</h1>
                                    </div>

                                    <div className="space-y-2">
                                        <TextEditor onChange={setEnunciado} onValidationError={handleValidationError} />
                                        {error && <div className="error-message text-red-500">{error}</div>}
                                    </div>
                                </ContainerForm>
                            
                                <ContainerForm>
                                    <div className="flex flex-col items-center mb-8">
                                        <h1 className="text-3xl font-bold text-[#366280]">Desenvolva as Alternativas</h1>

                                    </div>

                                    <div className="px-4 space-y-6">
                                        
                                            <InputAlternativa register={methods.register} name="alt1"
                                                isSelected={correctAnswer === 'alt1'}
                                                onSelect={() => onSelectAlternative('alt1')}
                                                justification={correctAnswer === 'alt1' ? justification : ''}
                                                setJustification={setJustification}
                                            />
                                            <FieldError error={errors.alt1?.message} />

                                            <InputAlternativa register={methods.register} name="alt2"
                                                isSelected={correctAnswer === 'alt2'}
                                                onSelect={() => onSelectAlternative('alt2')}
                                                justification={correctAnswer === 'alt2' ? justification : ''}
                                                setJustification={setJustification}
                                            />
                                            <FieldError error={errors.alt2?.message} />
     
                                            <InputAlternativa register={methods.register} name="alt3"
                                                isSelected={correctAnswer === 'alt3'}
                                                onSelect={() => onSelectAlternative('alt3')}
                                                justification={correctAnswer === 'alt3' ? justification : ''}
                                                setJustification={setJustification}
                                            />
                                            <FieldError error={errors.alt3?.message} />
                       
                                            <InputAlternativa register={methods.register} name="alt4"
                                                isSelected={correctAnswer === 'alt4'}
                                                onSelect={() => onSelectAlternative('alt4')}
                                                justification={correctAnswer === 'alt4' ? justification : ''}
                                                setJustification={setJustification}
                                            />
                                            <FieldError error={errors.alt4?.message} />
                
                                            <InputAlternativa register={methods.register} name="alt5"
                                                isSelected={correctAnswer === 'alt5'}
                                                onSelect={() => onSelectAlternative('alt5')}
                                                justification={correctAnswer === 'alt5' ? justification : ''}
                                                setJustification={setJustification}
                                            />
                                            <FieldError error={errors.alt5?.message} />
                                    </div>
                                </ContainerForm>
                            </section>
                            <div className="flex items-center space-x-2 mb-4">
                                    <ButtonB type="submit" label="Salvar" />
                                    <ButtonB type="button" label="Cancelar" />
                            </div>
                    </div>
                </form>
            </FormProvider>
        </Template>
    );
}






