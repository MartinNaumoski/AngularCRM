import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
  error = '';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.loginService.registerUser(this.user).subscribe(data => {}, error => {
      this.error = error.error.message;
    });
  }

}
