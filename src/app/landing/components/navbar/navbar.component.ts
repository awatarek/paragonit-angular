import { Component, OnInit } from '@angular/core';
import { AuthService, NavbarItemModel } from '../../../shared';
import * as AOS from 'aos';

@Component({
  selector: 'landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: NavbarItemModel[];
  public navbarRouterItems: NavbarItemModel[] = [];
  public isLoged: boolean;
  constructor(private auth: AuthService,) {}

  async ngOnInit(): Promise<void> {
    this.isLoged = await this.auth.returnLoginState()
    this.loadNavItems();
    AOS.init();
  }

  
  public loadNavItems(): void{
    this.navbarItems = [
      {
        name: 'Strona główna',
        route: '#main'
      },
      {
        name: 'Funkcje',
        route: '#function'
      },
      {
        name: 'Cena',
        route: '#price'
      },
      {
        name: 'O nas',
        route: '#about'
      },
      {
        name: 'Kontakt',
        route: '#contact'
      },
    ]
    if(this.isLoged){
      this.navbarRouterItems.push(
        {
          name: 'Logowanie',
          route: '/panel'
        }
      )
    } else {
      this.navbarRouterItems.push(
        {
          name: 'Logowanie',
          route: '/login'
        }
      )
    }

  }
}
