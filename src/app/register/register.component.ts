import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  newUser:FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.newUser = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('',Validators.required),
      password_confirmation: new FormControl('',Validators.required)
    })
  }

  registerUser(user:any) {

      this.loginService.registerUser(user).subscribe(data => {
        this.succes = "You created new user."
        this.router.navigate(['/home']);

      }, error => {
        this.error = error.error.message;
      });
  }
  onSubmit(form: FormGroup) {
    if(form.valid){
      this.registerUser(form.value);
    }
  }


}
