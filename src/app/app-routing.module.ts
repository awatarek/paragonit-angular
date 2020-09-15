import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent, ContactComponent, PricingComponent, PersonalComponent, BusinessComponent } from './landing/components';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'about', component: AboutComponent },
  {path: 'pricing', component: PricingComponent },
  {path: 'personal', component: PersonalComponent },
  {path: 'business', component: BusinessComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent},
  {path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }