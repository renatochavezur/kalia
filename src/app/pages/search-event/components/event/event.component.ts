import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  eventId = 0;
  event: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  getEventData() {
    this.eventsService.getEventData(this.eventId).subscribe(
      response => {
        this.event = response;
        console.log(this.event);
      }
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (isUndefined(params.id)) {
          this.router.navigate(['/courses']);
          return false;
        }
        this.eventId = params.id;
        this.getEventData();
      }
    );
  }

}
