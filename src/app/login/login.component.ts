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
  
  constructor(public auth: AuthService, private router: Router) { }

  async ngOnInit() {
    if(await this.auth.returnLoginState()){
      this.router.navigate(['./panel'])
    }
  }

}