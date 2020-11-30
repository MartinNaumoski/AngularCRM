import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  adminPanelFlag: boolean = false;
  baseUrl = "http://realestate-task.draft2017.com";
  constructor(private router: Router,private http:HttpClient) { }
  adminHeader() {
    let href = this.router.url;
    href == "/login" || href == "/register" ? this.adminPanelFlag = true : this.adminPanelFlag = false;
    return this.adminPanelFlag;
  }
  getAboutUsData():Observable<any>{
    return this.http.get(this.baseUrl + '/api/aboutus');
  }
  updateAboutUs(body):Observable<any>{
    let url = this.baseUrl + '/update/about-us';
    return this.http.put(this.baseUrl + '/update/about-us',JSON.stringify(body));
  }
}
