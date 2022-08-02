import {Result} from "./result.model";
import {QuestionOption} from "./question_option.model";

export interface Question
{
  id?: number;
  text: string;
  questionOptions: QuestionOption[];
  results?: Result[];
}
