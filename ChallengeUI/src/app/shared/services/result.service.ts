import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PrizeView} from "../models/views/prizeView.model";
import {environment} from "../../../environments/environment";
import {ResultReport} from "../models/views/ResultReportView.model";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private  http: HttpClient) { }
  getResultReport()
  {
    return this.http.get<ResultReport[]>(`${environment.apiUrl}/Result/Report`);
  }
}
