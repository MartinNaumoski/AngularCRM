import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: string = '';
  error:string = ''
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.login(this.email, this.password).subscribe(data => {
      localStorage.setItem('token',data.access_token);
      localStorage.setItem('email',this.email);
      this.router.navigate(['/home']);
    }, error => {
      this.error = error.error.message;
      
    });
  }

}
