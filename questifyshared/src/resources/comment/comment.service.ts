import { useAuth  } from '@/resources'
import { CommentRequest } from './commentRequest.resource';
import { CommentResponse } from './commentResponse.resource';


class CommentService{
    baseUrl: string = process.env.NEXT_PUBLIC_API_URL + "/api/comments";
    auth = useAuth();

    async saveComment(dados: CommentResponse): Promise<string> {
        
        const userSession = this.auth.getUserSession()
        const response = await fetch(`${this.baseUrl}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', "Authorization": `Bearer ${userSession?.accessToken}`
          } ,
          body: JSON.stringify(dados),
        });
    
        if (!response.ok) {
          throw new Error('Erro ao salvar a pergunta');
        }
    
        return response.headers.get('location') ?? '';
    }

    async getAllComents(questionId: number) : Promise<CommentRequest[]>{
      const userSession = this.auth.getUserSession()
      console.log("O ID DA QUESTÃO PASSADA É" , questionId)
                                  
      const response = await fetch(`${this.baseUrl}/${questionId}`, {
        headers:{
          "Authorization": `Bearer ${userSession?.accessToken}`
        }
      });

      if (!response.ok) {
        console.error(`Erro na resposta: ${response.status} ${response.statusText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
      return await response.json();
  }
}

export const useCommentService = () => new CommentService();