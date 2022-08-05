import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Result} from "../models/result.model";
import {ResultView} from "../models/views/resultView.model";
import {RedeemedPrizeView} from "../models/views/redeemedPrizeView.model";

@Injectable({
  providedIn: 'root'
})
export class ClaimPrizeService {

  constructor(private http: HttpClient) { }

  saveResult(result: ResultView)
  {
    return this.http.post<Result>(`${environment.apiUrl}/Result`,result);
  }
  saveRedeemedPrize(redeemed: RedeemedPrizeView)
  {
    return this.http.post(`${environment.apiUrl}/RedeemedPrize`,redeemed);
  }
}
