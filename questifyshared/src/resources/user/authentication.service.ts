import { AccessToken , Credentials, User , UserSessionToken } from './user.resource'
import { jwtDecode } from 'jwt-decode';


class AuthService{
    baseURL : string = process.env.NEXT_PUBLIC_API_URL + '/api/users';
    static AUTH_PARAM: string = '_auth';

    async authenticate(credentials : Credentials) : Promise<AccessToken>{
        const response = await fetch(this.baseURL + "/auth" , {
            method:'POST',
            body: JSON.stringify(credentials),
            headers: {
               "Content-Type" : "application/json" 
            }
        });

        if(response.status == 401){
            throw new Error("Usuário ou senha incorreto !")
        }

        return await response.json();
    }

    async save(user : User) : Promise<void>{
        const response = await fetch(this.baseURL, {
            method:'POST' ,
            body:JSON.stringify(user),
            headers: {
                "Content-Type" : "application/json"
            }
        });
        
        console.log("Response auth.save" ,response);
        if(response.status == 409){
            throw new Error("Usuário já existe !")
        }
    }

    initSession(token: AccessToken){
        if(token.accessToken){   
            const decodedToken: any = jwtDecode(token.accessToken);

            console.log(decodedToken);

            const userSessionToken: UserSessionToken = {
                accessToken: token.accessToken,
                email: decodedToken.sub,
                name: decodedToken.name,
                expiration: decodedToken.exp,
                id: decodedToken.id
                
            };
            console.log("User ID:", userSessionToken.id);
            this.setUserSession(userSessionToken)
        }
    }

    setUserSession(userSessionToken: UserSessionToken){
        try{
            localStorage.setItem(AuthService.AUTH_PARAM, JSON.stringify(userSessionToken))
        }catch(Error){}
        
    }

    getUserSession() : UserSessionToken | null{
        try{
            const authString = localStorage.getItem(AuthService.AUTH_PARAM);
            if(!authString){
                return null;
            }

            const token: UserSessionToken = JSON.parse(authString);
            return token;
        }catch(Error){return null}
        
    }

    isSessionValid() :boolean{
        const userSession: UserSessionToken | null = this.getUserSession();
        if(!userSession){
            return false;
        }

        const expiration: number | undefined = userSession.expiration;
        if(expiration){
            const expirationDateinMillis = expiration * 1000;
            return new Date() < new Date(expirationDateinMillis);
        }
        return false;
    }

    invalidadeSession() :void{
        try{
            localStorage.removeItem(AuthService.AUTH_PARAM);
        }catch(Error){}
        
    }
}

export const useAuth = () => new AuthService();