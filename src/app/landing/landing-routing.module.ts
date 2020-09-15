import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutComponent, BusinessComponent, ContactComponent, PersonalComponent, PricingComponent } from './components';

export let LandingRouter: Routes = [
    {path: '', component: LandingComponent, },
    {path: 'about', component: AboutComponent },
    {path: 'pricing', component: PricingComponent },
    {path: 'personal', component: PersonalComponent },
    {path: 'business', component: BusinessComponent },
    {path: 'contact', component: ContactComponent },
];
