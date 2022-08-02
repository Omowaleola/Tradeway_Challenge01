import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PrizeView} from "../models/views/prizeView.model";
@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private http: HttpClient) { }

  getPrizes()
  {
    return this.http.get<PrizeView[]>(`${environment.apiUrl}/Prize/availablePrizes`);
  }
}
