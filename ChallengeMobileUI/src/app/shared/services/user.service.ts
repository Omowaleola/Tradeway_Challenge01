import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/users.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User)
  {
    return this.http.post<User>(`${environment.apiUrl}/Registration`,user);
  }
  checkEmail(email: string){
    return this.http.get(`${environment.apiUrl}/Registration/checkEmail/${email}`);
  }

  checkMobileNumber(mobileNumber: string){
    return this.http.get(`${environment.apiUrl}/Registration/checkMobileNumber/${mobileNumber}`);
  }
}
