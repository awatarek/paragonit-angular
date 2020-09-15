import { Component, OnInit } from '@angular/core';
import { DbconnectService } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { ReceiptDetailsComponent } from './components/';

@Component({
  selector: 'panel-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
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
    const dialogRef = this.dialog.open(ReceiptDetailsComponent, {
      data: {
        new: true,
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      await this.refreshReceipt();
    });
  }

  public editReceipt(event){
    const dialogRef = this.dialog.open(ReceiptDetailsComponent, {
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
