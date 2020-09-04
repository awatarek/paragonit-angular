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
export class ContentComponent implements OnInit {
  public receipt: any;
  public displayedColumns: string[] = ['position', 'name', 'description', 'price', 'toolbar'];

  constructor(public dbConn: DbconnectService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.refreshReceipt();
  }

  public async removeReceipt(event){
    await this.dbConn.removeReceipt(event);
    await this.refreshReceipt();
  }

  public async refreshReceipt() {
    this.receipt = Object
    .values(
      await this.dbConn.getReceipt()
    );
    this.receipt.splice(this.receipt.length - 1)
  }

  public async openDialog() {
    const dialogRef = this.dialog.open(ReceiptComponent, {
      data: {
        new: true,
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      await this.refreshReceipt();
    });
  }

  public editReceipt(event){
    console.log(event);
    const dialogRef = this.dialog.open(ReceiptComponent, {
      data: {
        event,
        new: false,
      }
    });
    dialogRef.afterClosed().subscribe(async result => {
      await this.refreshReceipt();
    });
  }

}
