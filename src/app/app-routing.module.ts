import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent, AboutComponent, ContactComponent } from './landing/components';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }