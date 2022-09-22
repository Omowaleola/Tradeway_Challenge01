import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PrizeView} from "../models/views/prizeView.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private  http: HttpClient) { }

  getAllPrizes()
  {
    return this.http.get<PrizeView[]>(`${environment.apiUrl}/Prize`);
  }
  getPrizeById(id: number)
  {
    return this.http.get<PrizeView>(`${environment.apiUrl}/Prize/${id}`);
  }
  savePrize(prize: PrizeView)
  {
    return this.http.post(`${environment.apiUrl}/Prize`,prize);
  }
  updatePrize(id:number, prize: PrizeView)
  {
    return this.http.put(`${environment.apiUrl}/Prize/${id}`,prize);
  }
}
