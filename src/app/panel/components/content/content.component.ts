import { Component, OnInit } from '@angular/core';
import { DbconnectService, ParagonList } from 'src/app/shared';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReceiptComponent } from '../receipt';

@Component({
  selector: 'panel-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent  {
  constructor() { }
}
