import { Component, OnInit } from '@angular/core';
import { NavbarItemModel, AuthService } from 'src/app/shared';

@Component({
  selector: 'panel-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarItems: NavbarItemModel[];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.loadNavItems();
  }

  public clickFunction(item){
    item.itemFunction();
  }

  public loadNavItems(): void{
    this.navbarItems = [
      {
        name: 'Wyloguj',
        itemFunction: () => {
          this.auth.signOut();
        },
      },
    ]
  }

}
