import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  adminPanelFlag: boolean = false;

  constructor(private router: Router) { }
  adminHeader() {
    let href = this.router.url;
    href == "/login" ? this.adminPanelFlag = true : this.adminPanelFlag = false;
    return this.adminPanelFlag;
  }
 
}
