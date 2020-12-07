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
    params.append('price_from', searchQuery.price_from);
    params.append('price_to', searchQuery.price_to);
    params.append('offer-types', searchQuery.offer_types);
    params.append('city', searchQuery.city);
    params.append('type', searchQuery.type);
    console.log(this.baseUrl + '/search?price_from=' + searchQuery.price_from + '&price_to' + searchQuery.price_to + "&offer-types=" + searchQuery.offer_types + "&city=" + searchQuery.city + "&type=" + searchQuery.types)
    return this.http.get(this.baseUrl + '/search?price_from=' + searchQuery.price_from + '&price_to' + searchQuery.price_to + "&offer-types=" + searchQuery.offer_types + "&city=" + searchQuery.city + "&type=" + searchQuery.types)
    // return this.http.get('http://realestate-task.draft2017.com/search?price_from=&price_to=&offer-types=&city=&type=1%2B1');

  }
}
