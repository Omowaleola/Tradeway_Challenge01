import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Result} from "../models/result.model";
import {RedeemedPrize} from "../models/redeemed_prize.model";

@Injectable({
  providedIn: 'root'
})
export class ClaimPrizeService {

  constructor(private http: HttpClient) { }

  saveResult(result: Result)
  {
    return this.http.post<Result>(`${environment.apiUrl}/Result`,result);
  }
  saveRedeemedPrize(redeemed: RedeemedPrize)
  {
    return this.http.post<Result>(`${environment.apiUrl}/RedeemedPrize`,redeemed);
  }
}
