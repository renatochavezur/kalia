import { Component, OnInit } from '@angular/core';

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
      title: 'Mis Eventos',
      url: '/menu/events',
      icon: 'briefcase'
    },
    {
      title: 'Contactos',
      url: '/menu/contacts',
      icon: 'people'
    },
    {
      title: 'Salir',
      url: '',
      icon: 'exit'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
