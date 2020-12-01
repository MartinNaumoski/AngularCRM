import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../app/login.service';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  adminPanelFlag: boolean = false;
  baseUrl = "http://realestate-task.draft2017.com";
  constructor(private router: Router, private http: HttpClient, private auth :LoginService) { }
  adminHeader() {
    let href = this.router.url;
    href == "/login" || href == "/register" ? this.adminPanelFlag = true : this.adminPanelFlag = false;
    return this.adminPanelFlag;
  }
  getAboutUsData(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/aboutus');
  }
  updateAboutUs(body:any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/api/update/about-us', body);
  }
  getArticles(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/articles');
  }
  getContacts():Observable<any>{
    return this.http.get(this.baseUrl + '/api/contact-us')
  }
  getDetailArticle(id:any):Observable<any>{
    return this.http.get(this.baseUrl + '/api/article/property/' + id)
  }
  getDetailContact(id:any):Observable<any>{
    return this.http.get(this.baseUrl + '/api/contact/' + id)
  }
  deleteContact(id:any):Observable<any>{
    return this.http.delete(this.baseUrl + '/api/contact/delete/'+id)
  }
  createArticle(body:any):Observable<any>{
    return this.http.post(this.baseUrl + '/api/create-article',body)
  }
  deleteArticle(id:any):Observable<any>{
    return this.http.delete(this.baseUrl + '/api/article/delete/'+id)
  }


}
