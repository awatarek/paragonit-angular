import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NavbarComponent, ContactComponent, AboutComponent } from './components/';


@NgModule({
  declarations: [ 
    LandingComponent, 
    NavbarComponent, 
    AboutComponent, 
    ContactComponent,
   ],
  imports: [
    CommonModule,
  ]
})
export class LandingModule { }
