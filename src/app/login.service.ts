import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://realestate-task.draft2017.com";

  constructor(private http:HttpClient) { }

  login(user,password): Observable<any> {
    return this.http.post(this.baseUrl + '/api/auth/login',{email:user,password});
  }
}
