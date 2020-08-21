import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { panelRoutes } from './panel-routes';
import { FinanceComponent } from './components/finance/finance.component';

@NgModule({
  declarations: [PanelComponent, SidebarComponent, ContentComponent, FinanceComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    RouterModule.forChild(panelRoutes),
    SharedModule,
  ]
})
export class PanelModule { }
