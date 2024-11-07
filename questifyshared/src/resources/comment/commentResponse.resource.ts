export class CommentResponse{
    text: string;
    userId: number;
    questionId: number;

    constructor(text: string , user: number , question:number){
        this.text = text;
        this.userId = user;
        this.questionId = question;
    }
}