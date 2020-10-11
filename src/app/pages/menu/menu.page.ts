import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Mi Cuenta',
      url: '/menu/profile',
      icon: 'person'
    },
    {
      title: 'Eventos',
      url: '/menu/events',
      icon: 'briefcase'
    },
    {
      title: 'Contactos',
      url: '/menu/contacts',
      icon: 'people'
    },
  ];

  constructor(
    protected router: Router,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.selectedIndex = 0;
    this.userDataService.deleteAuthData();
    this.router.navigateByUrl('login');
  }

}
