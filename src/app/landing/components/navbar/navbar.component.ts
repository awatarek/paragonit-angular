import { Component, OnInit } from '@angular/core';
import { NavbarItemModel } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: NavbarItemModel[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadNavItems();
  }

  public navigateTo(route){
    this.router.navigate[route]
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

    ]
  }
}
