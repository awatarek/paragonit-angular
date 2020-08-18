import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent, ContactComponent } from './landing/components';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent},
  {path: 'panel', component: PanelComponent, canActivate: [ AuthGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }