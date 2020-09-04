import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbconnectService } from 'src/app/shared';

@Component({
  selector: 'panel-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  public newReceiptGroup;
  public ReceiptGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dbConn: DbconnectService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.data.new == true){
      this.createNewReceiptGroup();
    } else if (this.data.new == false){
      this.updateReceiptGroup();
    }
  }
  
  public createNewReceiptGroup(){
     this.newReceiptGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(4)),
      description: new FormControl('', Validators.minLength(4)),
      price: new FormControl('', Validators.minLength(4)),
    })
  }

  public updateReceiptGroup(){
    this.ReceiptGroup = new FormGroup({
      name: new FormControl(this.data.event.name,),
      description: new FormControl(this.data.event.description,),
      price: new FormControl(this.data.event.price,),
      receiptIndex: new FormControl(this.data.event.receiptIndex,),
    })
  }

  public async newReceipt(){
    await this.dbConn
    .postReceipt(
      this.newReceiptGroup.value
    );
  }

  public async updateReceipt(){
    await this.dbConn
    .updateReceipt(
      this.ReceiptGroup.value
    );
  }

}
