import { Component, OnInit } from '@angular/core';
import { NavbarItemModel } from '../../../shared';

@Component({
  selector: 'landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: NavbarItemModel[];
  constructor() {}

  ngOnInit(): void {
    this.loadNavItems();
  }

  
  public loadNavItems(): void{
    this.navbarItems = [
      {
        name: 'Strona główna',
        route: ''
      },
      {
        name: 'O nas',
        route: '/about'
      },
      {
        name: 'Kontakt',
        route: '/contact'
      },
      {
        name: 'Logowanie',
        route: '/login'
      },
    ]
  }
}
