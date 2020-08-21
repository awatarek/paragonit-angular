import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [PanelComponent, NavbarComponent, SidebarComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    SharedModule,
  ]
})
export class PanelModule { }
