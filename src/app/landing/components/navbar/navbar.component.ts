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
        route: ''
      },
      {
        name: 'O nas',
        route: '/about'
      },
      {
        name: 'Cena',
        route: '/pricing'
      },
      {
        name: 'Kontakt',
        route: '/contact'
      },
    ]
    if(this.isLoged){
      this.navbarItems.push(
        {
          name: 'Logowanie',
          route: '/panel'
        }
      )
    } else {
      this.navbarItems.push(
        {
          name: 'Logowanie',
          route: '/login'
        }
      )
    }
  }
}
