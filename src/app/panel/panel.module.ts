import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { panelRoutes } from './panel-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent, ContentComponent, FinanceComponent, MainComponent, ReceiptComponent } from './components';

@NgModule({
  declarations: [PanelComponent, SidebarComponent, ContentComponent, FinanceComponent, MainComponent, ReceiptComponent],
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
