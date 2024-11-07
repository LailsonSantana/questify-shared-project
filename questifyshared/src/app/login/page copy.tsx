import InputAlternativa from "@/components/questao/create/InputAlternativa";
import { Template } from "@/components/Template";

export default function LoginPage() {
    return (
        <Template>
            <div className="bg-backgroundOne rounded-md mb-16 shadow-md p-4 border border-gray-300">
                <h1 className="font-bold ml-32 p-2">Bem vindo ao Questify Shared</h1>
                <h2 className="ml-32 p-1">
                    Questify é uma plataforma de elaboração de questões objetivas que visa viabilizar 
                    a construção de conhecimento em um ambiente autosustentável e colaborativo. 
                    Crie sua conta e comece agora mesmo.
                </h2>
            </div>

            <div className="flex justify-center items-center">
                {/* Espaço lateral com informações/imagens */}
                <div className="w-1/3 p-6 bg-gray-100 shadow-md rounded-md border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">Sobre o Questify</h2>
                    <p className="text-sm text-gray-700 mb-4">
                        Questify permite a criação de questões colaborativas para otimizar 
                        o aprendizado. A plataforma utiliza IA para moderação de conteúdo 
                        e criação de simulados personalizados.
                    </p>
                    <img src="/path-to-image.jpg" alt="Imagem ilustrativa" className="w-full h-48 object-cover rounded-md" />
                </div>

                {/* Seção de cadastro */}
                <section className="w-2/5 shadow-md p-4 border border-gray-300 bg-containerColor m-auto rounded-md ml-8">
                    <div className="p-1 mb-2">
                        <h1 className="text-center font-bold text-lg">Cadastre-se</h1>
                    </div>

                    <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-1">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobrenome</label>
                                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sobrenome" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome@email.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Eu concordo com os <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">termos e condições</a>.
                            </label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Cadastrar
                        </button>
                    </form>
                </section>
            </div>
        </Template>
    )
}

