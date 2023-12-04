import { QuestionType } from "../enums/question-type.enum";

export interface Question{
    type: QuestionType,
    description: string,
    options?: string[]
}