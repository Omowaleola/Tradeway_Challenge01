import {Question} from "../question.model";
import {QuestionOption} from "../question_option.model";

export interface QuestionView
{
    question: Question;
    questionOptions: QuestionOption[];
}
