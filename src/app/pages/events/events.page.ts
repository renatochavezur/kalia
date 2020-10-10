import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  owned = true;
  enrolled = false;
  events = [];
  term = '';

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
    this.eventsService.getEventsList(this.term, this.owned, this.enrolled, null).subscribe(
      response => {
        this.events = response;
      }
    );
  }

  getTermEventList(event) {
    this.term = event.srcElement.value;
    this.getEventsList();
  }

  setOwnedEventList() {
    if (!this.owned) {
      this.owned = true;
      this.enrolled = false;
      this.getEventsList();
    }
  }

  setEnrolledEventList() {
    if (!this.enrolled) {
      this.owned = false;
      this.enrolled = true;
      this.getEventsList();
    }
  }

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.getEventsList();
  }

}
