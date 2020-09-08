import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { NavbarComponent, ContactComponent, AboutComponent, MainComponent, FooterComponent } from './components/';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PricingComponent } from './components/pricing/pricing.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [ 
    LandingComponent, 
    NavbarComponent, 
    AboutComponent, 
    ContactComponent, 
    MainComponent, PricingComponent, PersonalComponent, BusinessComponent, FooterComponent,
   ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
  ]
})
export class LandingModule { }
