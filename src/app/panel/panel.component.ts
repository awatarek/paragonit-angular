import { Component, OnInit } from '@angular/core';
import { AuthService, DbconnectService } from '../shared';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(public auth: AuthService, public dbConn: DbconnectService) { }

  ngOnInit() {
    this.data();
  }

  public linkFB(){
    this.auth.linkFb();
  }
  public data(){
    /*let data = this.dbConn.showData('urlImages', '7UIK5oX2v0HgEHigDwYw');
    console.log(data);*/
  }

}
