export interface Answer{
    text: string;
    isCorrect: boolean;
}

export class Question{
    id?: number;
    statement: string;
    discipline: string;
    answers: Answer[];
    userId?: number
    nameUser: string;
    

    constructor(id: number,statement: string, discipline: string, answers: Answer[],userId: number , nameUser:string){
        this.id = id;
        this.statement = statement;
        this.discipline = discipline;
        this.answers = answers;
        this.userId = userId;
        this.nameUser = nameUser
    }
}