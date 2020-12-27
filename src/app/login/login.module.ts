import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';
import { MatFormFieldModule }  from '@angular/material/form-field';

export let LoadingRoutes: Routes = [
  {path: '', component: LoginComponent,},
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    RouterModule,
    RouterModule.forChild(LoadingRoutes),
  ]
})
export class LoginModule { }
