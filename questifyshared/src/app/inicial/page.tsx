'use client'

import ClassCard from "@/components/inicial/Card";
import { Template } from "@/components/Template";
import { useRouter } from "next/navigation";



export default function InicialPage() {
    const router = useRouter();

    const handleNavigation = (event : any, path : string) => {
        // Aqui você pode acessar o evento de clique
        router.push(path)
    };

    return (
        <Template>
           
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-3xl font-bold mb-16 text-titllecolor mt-8">Bem-vindo ao Questify Shared</h1>
                <div className="flex flex-row">
                    <div className="grid grid-cols-4 gap-8">
                        <ClassCard 
                            label="Elaborar" 
                            title="Elabore uma questão" 
                            onClick={(event) => handleNavigation(event, '/formulario')}
                            imageUrl="https://img.freepik.com/free-vector/company-employees-use-web-search-find-ideas-doing-business-company_1150-43196.jpg?t=st=1729709931~exp=1729713531~hmac=3649dd7aa763b7efa472fbd9578d2b62a13b242557b7bc6c98590262e8d98c25&w=740" 
                        />
                        <ClassCard 
                            label="Responder" 
                            title="Responda questões" 
                            onClick={(event) => handleNavigation(event, '/questoes')}
                            imageUrl="https://img.freepik.com/free-vector/company-employees-use-web-search-find-ideas-doing-business-company_1150-43196.jpg?t=st=1729709931~exp=1729713531~hmac=3649dd7aa763b7efa472fbd9578d2b62a13b242557b7bc6c98590262e8d98c25&w=740" 
                        />
                        <ClassCard 
                            label="Visualizar" 
                            title="Questões Respondidas" 
                            imageUrl="https://img.freepik.com/free-vector/people-checking-giant-check-list-background_23-2148089197.jpg?t=st=1729710074~exp=1729713674~hmac=c63fe56d98b477f973470d21506019a78108ad18d13960cb925eeebc02a798c2&w=740" 
                        />
                        <ClassCard 
                            label="Visualizar" 
                            title="Questões Criadas" 
                            imageUrl="https://img.freepik.com/free-vector/working-woman-checking-giant-check-list_23-2148078150.jpg?t=st=1729710262~exp=1729713862~hmac=3c8a6dc07c1283af0d837c4f2562138520589bae45fcbe25dd90c60478e60450&w=740" 
                        />
                    </div>
                </div>
            </div>
        </Template>
    );
}

