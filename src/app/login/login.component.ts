import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator }  from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { AuthService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    login: new FormControl('', Validators.compose([Validators.minLength(3), Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(3), Validators.required])),
  })

  public isErrorVisible(formControlName: string, errorName: string){
    console.log(this.loginForm.get(formControlName));
  }

  public test(){
    //console.log(this.loginForm);
    this.isErrorVisible('login', 'minLength');
  }
}