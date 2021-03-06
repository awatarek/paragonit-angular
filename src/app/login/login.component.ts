import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator }  from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { AuthService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(public auth: AuthService, private router: Router, private fb: FormBuilder) { }

  async ngOnInit() {
    this.createFormGroup();
    if(await this.auth.returnLoginState()){
      this.router.navigate(['./panel'])
    }
  }

  public createFormGroup(): void{
    this.formGroup = new FormGroup({
      mail: new FormControl('',),
      password: new FormControl('',),
    })
  }

}