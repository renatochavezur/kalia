import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.page.html',
  styleUrls: ['./search-event.page.scss'],
})
export class SearchEventPage implements OnInit {
  searchName = true;
  searchCode = false;
  events = [];
  term = '';
  code = '';

  statusStates = {
    CLOSED: 'Cerrado',
    OPEN: 'Abierto',
    PROGRESS: 'En progreso'
  }

  modeStates = {
    VIRTUAL: 'Virtual',
    PRESENTIAL: 'Presencial'
  }

  getEventsList() {
    if (this.searchName) {
      this.eventsService.getEventsList(this.term, null, null, null).subscribe(
        response => {
          this.events = response;
        }
      );
    }
    if (this.searchCode) {
      this.eventsService.getEventsList(null, null, null, this.code).subscribe(
        response => {
          this.events = response;
        }
      );
    }
  }

  getTermEventList(event) {
    if (this.searchName) {
      this.term = event.srcElement.value;
      this.getEventsList();
    }
    if (this.searchCode) {
      this.code = event.srcElement.value;
      this.getEventsList();
    }
  }

  setSearchName() {
    if (!this.searchName) {
      this.searchName = true;
      this.searchCode = false;
      this.getEventsList();
    }
  }

  setSearchCode() {
    if (!this.searchCode) {
      this.searchName = false;
      this.searchCode = true;
      this.getEventsList();
    }
  }

  setPlaceholderSearch() {
    if (this.searchName) {
      return 'Nombre del Evento';
    }
    if (this.searchCode) {
      return 'Codigo del Evento';
    }
  }

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.getEventsList();
  }

}
