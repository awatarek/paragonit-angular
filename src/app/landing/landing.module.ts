import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NavbarComponent, ContactComponent, AboutComponent } from './components/';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
    LandingComponent, 
    NavbarComponent, 
    AboutComponent, 
    ContactComponent,
   ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingModule { }
