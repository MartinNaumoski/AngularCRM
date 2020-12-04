import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private adminService: AdminServiceService) { }


  adminPanelFlag: boolean = false;
  ngOnInit(): void {
    this.adminPanelFlag = this.adminService.adminHeader();
  }
  toogleSideBar() {
    this.notifyParent.emit('Some value to send to the parent');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    location.reload();

  }

}
