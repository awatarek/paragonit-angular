import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { panelRoutes } from './panel-routes';
import { FinanceComponent } from './components/finance/finance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PanelComponent, SidebarComponent, ContentComponent, FinanceComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    RouterModule.forChild(panelRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class PanelModule { }
