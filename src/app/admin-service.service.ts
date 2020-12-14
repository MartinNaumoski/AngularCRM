import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { LoginService } from '../app/login.service';
import { Form } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  adminPanelFlag: boolean = false;
  baseUrl = "http://realestate-task.draft2017.com";
  constructor(private router: Router, private http: HttpClient, private auth: LoginService) { }
  adminHeader() {
    let href = this.router.url;
    href == "/login" || href == "/register" || href == "/reset-password" ? this.adminPanelFlag = true : this.adminPanelFlag = false;
    return this.adminPanelFlag;
  }
  getAboutUsData(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/aboutus');
  }
  updateAboutUs(body: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/api/update/about-us', body);
  }
  getArticles(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/articles');
  }
  getContacts(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/contact-us')
  }
  getDetailArticle(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/api/article/property/' + id)
  }
  getDetailContact(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/api/contact/' + id)
  }
  deleteContact(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/api/contact/delete/' + id)
  }
  createArticle(body: FormData): Observable<any> {
    return this.http.post(this.baseUrl + '/api/create-article', body, {
      reportProgress: true,
      observe: 'events'
    })
  }
  deleteArticle(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/api/article/delete/' + id)
  }
  getArticle(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/api/article/property/' + id)
  }
  editArticle(body: FormData, id: any): Observable<any> {
    // const httpHeaders: HttpHeaders = new HttpHeaders({
    //   'X-XSRF-TOKEN': 'XSRF-TOKEN=eyJpdiI6ImduYUVmMG1NdkF1WUFcL0taSERwcWd3PT0iLCJ2YWx1ZSI6ImxYUndLQ0E1b3ROR3pQZ0txUGJ6XC9VQnB0aUJZXC85RlRqV3dUUWNIWHRKU2Y2NndQXC9mY1VoMTR2Sm1zRmRjV3kiLCJtYWMiOiJhMjAxZmU4Y2Q4OGNkOGJhMmU0ZGVjYTViMzFmMWIxNzM4OWMyZTUwNmU3ZDUwOTFkMzhkNjdhMTI0ZTU1M2Q4In0%3D',
    //   'Access-Control-Allow-Headers': "X-CSRF-Token, Content-Type",
    //    'Content-Type': 'application/json',
    // });
    return this.http.put<any>('http://realestate-task.draft2017.com/update-article/' + id, body);
  }

}
