import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutComponent, BusinessComponent, ContactComponent, MainComponent, PersonalComponent, PricingComponent } from './components';

export let LandingRouter: Routes = [
    {path: '', component: LandingComponent, children:[
        {path: 'about', component: AboutComponent },
        {path: 'pricing', component: PricingComponent },
        {path: 'personal', component: PersonalComponent },
        {path: 'business', component: BusinessComponent },
        {path: 'contact', component: ContactComponent },
        {path: '', component: MainComponent}
    ]},
];
