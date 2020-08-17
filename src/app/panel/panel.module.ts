import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    SharedModule,
  ]
})
export class PanelModule { }
