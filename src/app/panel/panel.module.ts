import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PanelModule { }
