import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutComponent, BusinessComponent, ContactComponent, MainComponent, PersonalComponent, PricingComponent } from './components';

export let LandingRouter: Routes = [
    {path: '', component: LandingComponent, children:[
        {path: '', component: MainComponent}
    ]},
];
