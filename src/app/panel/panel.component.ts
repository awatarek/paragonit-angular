import { Component, OnInit } from '@angular/core';
import { AuthService, DbconnectService, ParagonList } from '../shared';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public userData: ParagonList;
  public settings: any;
  constructor(public auth: AuthService, public dbConn: DbconnectService) { }

  async ngOnInit() {
    this.settings = await this.dbConn.showData('settings',await this.auth.getUserUId());
    if(this.settings?.firstTime == undefined || this.settings?.firstTime == true){
      this.auth.createSettings(await this.auth.getUserUId());
    }
  }


}
