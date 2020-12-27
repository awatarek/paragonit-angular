import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'paragonit';

  ngOnInit(){
    console.info('%cStop!',"color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold");
    console.info("%cTa funkcja przeglądarki powinna być używana jedynie przez programistów! Jeśli ktoś kazał ci tu wejść i wkleić coś może być to próba zdobycia twoich danych!", "font-size:1rem")
  }

}
