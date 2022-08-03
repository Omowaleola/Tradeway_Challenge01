import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PrizeView} from "../models/views/prizeView.model";
import {BehaviorSubject, Subscribable, Subscription} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PrizeService {




  constructor(private http: HttpClient) { }

  getPrizes(numPrizes: number)
  {
    return this.http.get<PrizeView[]>(`${environment.apiUrl}/Prize/Prizes/${numPrizes}`);
  }








































}
