export class CommentRequest{
    id?: number
    text: string;
    userId?: number;
    questionId: number;
    nameUser: string;

    constructor(id: number, text: string , user: number , question:number , nameUser:string){
        this.id = id
        this.text = text;
        this.userId = user;
        this.questionId = question;
        this.nameUser = nameUser;
    }

}