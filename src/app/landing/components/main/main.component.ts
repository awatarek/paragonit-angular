import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'landing-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public firmCard: boolean;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.firmCard = false;
  }


}
