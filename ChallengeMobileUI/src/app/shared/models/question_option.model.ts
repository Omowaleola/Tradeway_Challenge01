import {Result} from "./result.model";

export interface QuestionOption
{
  id ?: number;
  text ?: number;
  questionId: number;
  isCorrect: boolean;
  results: Result[];
}
