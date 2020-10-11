import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  filters = false;
  textFilters = '+ Filtros';

  owned = true;
  enrolled = false;
  events = [];
  term = '';
  searchBy = 'NAME';
  statusSearch = '';

  statusStates = {
    CLOSED: 'Cerrado',
    OPEN: 'Abierto',
    PROGRESS: 'En progreso'
  };

  modeStates = {
    VIRTUAL: 'Virtual',
    PRESENTIAL: 'Presencial'
  };

  getEventsList() {
    if (this.searchBy === 'NAME') {
      this.eventsService.getEventsList(
        this.term, this.owned, this.enrolled, null, this.statusSearch
      ).subscribe(
        response => {
          this.events = response;
        }
      );
    }
    else if (this.searchBy === 'CODE') {
      this.eventsService.getEventsList(
        null, this.owned, this.enrolled, this.term, this.statusSearch
      ).subscribe(
        response => {
          this.events = response;
        }
      );
    }
  }

  getTermEventList(event) {
    this.term = event.srcElement.value;
    this.getEventsList();
  }

  setOwnedEventList() {
    if (!this.owned) {
      this.owned = true;
      this.enrolled = false;
    }
    else {
      this.owned = false;
    }
    this.getEventsList();
  }

  setEnrolledEventList() {
    if (!this.enrolled) {
      this.owned = false;
      this.enrolled = true;
      this.getEventsList();
    }
    else {
      this.enrolled = false;
    }
    this.getEventsList();
  }

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.getEventsList();
  }

  showFilters() {
    if (this.filters) {
      this.textFilters = '+ Filtros';
      this.filters = false;
    } else {
      this.textFilters = '- Filtros';
      this.filters = true;
    }
  }

  setPlaceholderSearch() {
    if (this.searchBy === 'NAME') {
      return 'Nombre del Evento';
    }
    if (this.searchBy === 'CODE') {
      return 'Codigo del Evento';
    }
  }

  setKindSearch(kind) {
    if (kind !== this.searchBy) {
      this.searchBy = kind;
      this.getEventsList();
    }
  }

  setStatus(status) {
    if (status !== this.statusSearch) {
      this.statusSearch = status;
    }
    else {
      this.statusSearch = '';
    }
    this.getEventsList();
  }
}
