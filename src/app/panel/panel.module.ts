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
import { ReceiptComponent, FinanceComponent, SidebarComponent, ContentComponent, MainComponent } from './components/';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatDialogModule,
  ]
})
export class PanelModule { }
