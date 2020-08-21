import { Component, OnInit } from '@angular/core';
import { DbconnectService } from 'src/app/shared';

@Component({
  selector: 'panel-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public dbConn: DbconnectService) { }

  ngOnInit(): void {
  }

}
