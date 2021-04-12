import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  submitted:any;
  hide = true;
  
  constructor(private formbuilder:FormBuilder) {
    this.loginForm=FormGroup
   }
  
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:['', Validators.compose([Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password:['', Validators.compose([Validators.required, Validators.minLength(8), Validators.minLength(8), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])]
    })
  }

  get f(){return this.loginForm.controls}

  onLogin(){
    this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        console.log(this.loginForm.value)
    }
  
  
    
}
