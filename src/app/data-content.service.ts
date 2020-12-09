import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataContentService {
  baseUrl = "http://realestate-task.draft2017.com";

  constructor(private http: HttpClient) { }
  search(searchQuery: any): Observable<any> {
    let params = new HttpParams();
    params.set('price_from', searchQuery.price_from);
    params.set('price_to', searchQuery.price_to);
    params.set('offer-types', searchQuery.offer_types);
    params.set('city', searchQuery.city);
    params.set('type', searchQuery.type);
    console.log(searchQuery)
    //console.log(this.baseUrl + '/search?price_from=' + searchQuery.price_from + '&price_to=' + searchQuery.price_to + "&offer-types=" + searchQuery.offer_types + "&city=" + searchQuery.city + "&type=" + searchQuery.type)
    return this.http.get(this.baseUrl + '/api/search?price_from=' +searchQuery.price_from+ '&price_to=' + searchQuery.price_to + "&offer-types=" + searchQuery.offer_types + "&city=" + searchQuery.city + "&type=" + searchQuery.type)
    //  return this.http.get('http://realestate-task.draft2017.com/api/search?',{params:params});

  }
}
