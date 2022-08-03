import { Injectable } from '@angular/core';
import {PrizeView} from "../models/views/prizeView.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Question} from "../models/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  getQuestion()
  {
    return this.http.get<Question>(`${environment.apiUrl}/Question/PrizeQuestion`);
  }
  getCorrectQuestionOptionId( question:Question)
  {
    let id: number;
    question.questionOptions.forEach((option)=>{
      if(option.isCorrect==true)
      {
        id= option.id;
      }

    });
    return id;
  }
}
