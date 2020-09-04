import { Component, OnInit } from '@angular/core';
import { DbconnectService, ParagonList } from 'src/app/shared';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'panel-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public receipt: any;
  public displayedColumns: string[] = ['position', 'name', 'description', 'price', 'toolbar'];

  constructor(public dbConn: DbconnectService) { }

  async ngOnInit(): Promise<void> {
    await this.refreshReceipt();
  }

  public newReceiptGroup = new FormGroup({
    name: new FormControl('s',),
    description: new FormControl('d',),
    price: new FormControl('2',),
  })

  public async newReceipt(){
    await this.dbConn
    .postReceipt(
      this.newReceiptGroup.value
    );
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

}
