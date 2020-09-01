import { Component, OnInit } from '@angular/core';
import { DbconnectService, ParagonList } from 'src/app/shared';

@Component({
  selector: 'panel-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public receipt: any;
  constructor(public dbConn: DbconnectService) { }

  async ngOnInit(): Promise<void> {
    this.receipt = await this.dbConn.getReceipt();
    this.receipt = Object.values(this.receipt);
    console.log(this.receipt);
  }

}
