import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  registerForm:any

  submitted = false;
  
  constructor(private formbuilder:FormBuilder) { 
    this.registerForm=FormGroup
    
  }
  
  ngOnInit(): void {
    this.registerForm= this.formbuilder.group({
      firstName: ['', [Validators.required,  Validators.minLength(6)]],
      lastName:['', Validators.compose([Validators.required,  Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required,  Validators.minLength(8), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])],
      
      });
    
  }

  get f() { return this.registerForm.controls; }
  onSubmit(){
  //   console.log(this.registerForm.value);
  
    this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        
    }
}
