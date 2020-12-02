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
  succes = '';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.validateUser(this.user))
    
    if( this.validateUser(this.user) ){
      this.loginService.registerUser(this.user).subscribe(data => {
        this.succes = "You created new user."
      }, error => {
        this.error = error.error.message;
      });
    }
    
  }
  validateUser(user: any) {
    this.error = '';
    let valFlag: boolean = false;
    user.name == '' ? this.error += "Must enter name . " : '';
    !/^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(user.email) ? this.error += 'Must enter valid email. ' : '';
    user.password == '' ? this.error += 'Must enter password.' : '';
    user.password != user.password_confirmation ? this.error += 'Two passwords must be the same.' : '';
    if( user.name != '' &&  /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(user.email) && user.password != '' && user.password == user.password_confirmation){
      valFlag = true;
    }
    return valFlag;
  }

}
