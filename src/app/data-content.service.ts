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
    let price_fromm = searchQuery.price_from == undefined ? 0 : searchQuery.price_from;
    let type = searchQuery.type != '' ? searchQuery.type.charAt(0) + '%2B' + searchQuery.type.charAt(2) : '';
    return this.http.get(this.baseUrl + '/api/search?price_from=' +price_fromm + '&price_to=' + searchQuery.price_to + "&offer-types=" + searchQuery.offer_types + "&city=" + searchQuery.city + "&type=" + type)

  }
}
