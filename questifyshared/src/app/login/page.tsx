import InputAlternativa from "@/components/questao/create/InputAlternativa";
import { Template } from "@/components/Template";
import createImage from './assets/create.jpg';

export default function LoginPage() {
    return (
        <Template>
            <div className="flex items-center justify-center h-[650px]">
                {/* Seção de informações */}
                <div className="w-2/5 h-full bg-titllecolor rounded-l-md p-8 shadow-md border-r border-gray-300">
                    {/*<h1 className="font-bold text-2xl mb-4 text-white">Bem-vindo ao Questify Shared</h1>
                    <p className="text-lg mb-6 text-white">
                        Questify é uma plataforma de elaboração de questões objetivas que visa viabilizar a construção
                        de conhecimento em um ambiente autosustentável e colaborativo. Crie sua conta e comece agora mesmo!
                    </p>*/}
                    <div className="items-center">
                        <img src="https://cdn.dribbble.com/userupload/10846737/file/original-7ee25fe929f1d993a2716f984ff0d86c.jpg?resize=1024x768&vertical=center" alt="Imagem ilustrativa" className="w-full h-92 object-cover rounded-md" />
                    </div>
                    
                </div>

                {/* Seção de cadastro */}
                <section className="w-1/2 h-full flex items-center justify-center bg-containerColor rounded-r-md p-8 shadow-md">
                    <div className="w-3/4">
                        <h1 className="text-center font-bold text-2xl mb-6">Cadastre-se</h1>
                        
                        <form>
                            <div className="grid gap-6 mb-6">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nome" required />
                                </div>

                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Sobrenome</label>
                                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sobrenome" required />
                                </div>

                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="nome@email.com" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirme a senha</label>
                                <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                            </div>

                            <div className="flex items-start mb-6">
                                <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />

                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                                    Eu concordo com os <a href="#" className="text-blue-600 hover:underline">termos e condições</a>.
                                </label>
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5">
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </Template>
    );
}
