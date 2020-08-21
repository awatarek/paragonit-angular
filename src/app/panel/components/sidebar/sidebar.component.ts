import { Component, OnInit } from '@angular/core';
import { SidenavItemModel, AuthService } from 'src/app/shared';

@Component({
  selector: 'panel-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarItem: SidenavItemModel[];
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.loadSideNavItems();
  }

  public loadSideNavItems(): void{
    this.sidebarItem = [
      {
        name: 'panel',
        icon: 'fa-home',
        iconClass: 'fa',
        route: '/panel',
      },
      {
        name: 'receipt',
        icon: 'fa-th',
        iconClass: 'fa',
        route: '/receipt',

      },
      {
        name: 'panel',
        icon: 'fa-money',
        iconClass: 'fa',
        route: 'finance',
      },
      {
        name: 'panel',
        icon: 'fa-sign-out',
        iconClass: 'fa',
        itemFunction: () => this.auth.signOut(),
      },
    ]
  }



}
