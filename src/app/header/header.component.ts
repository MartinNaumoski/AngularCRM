import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLogin = this.checkLogin();
  }
  checkLogin():boolean{
    let isLoggin :boolean ;
    this.loginService.getToken() != null ? isLoggin = true : isLoggin =  false;
    return isLoggin;
  }
}
