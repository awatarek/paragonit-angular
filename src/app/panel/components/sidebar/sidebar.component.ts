import { Component, OnInit } from '@angular/core';
import { SidenavItemModel } from 'src/app/shared';

@Component({
  selector: 'panel-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarItem: SidenavItemModel[];
  constructor() { }

  ngOnInit(): void {
    this.loadSideNavItems();
  }

  public loadSideNavItems(): void{
    this.sidebarItem = [
      {
        name: 'panel',
        icon: 'fa-home',
        iconClass: 'fa'
      },
      {
        name: 'panel',
        icon: 'fa-th',
        iconClass: 'fa'
      },
      {
        name: 'panel',
        icon: 'fa-money',
        iconClass: 'fa'
      },
      {
        name: 'panel',
        icon: 'fa-sign-out',
        iconClass: 'fa'
      },
    ]
  }



}
