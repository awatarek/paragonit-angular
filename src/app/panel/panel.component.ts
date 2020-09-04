import { Component, OnInit } from '@angular/core';
import { AuthService, DbconnectService, ParagonList } from '../shared';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public userData: ParagonList;
  constructor(public auth: AuthService, public dbConn: DbconnectService) { }

  async ngOnInit() {
  }


}
