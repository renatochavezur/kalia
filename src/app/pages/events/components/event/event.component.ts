import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../../services/events.service';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  eventId = 0;
  event: any;
  own = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private userDataService: UserDataService,
  ) { }

  getEventData() {
    const userData = this.userDataService.getAuthUserData();
    this.eventsService.getEventData(this.eventId).subscribe(
      response => {
        this.event = response;
        this.own = this.event.own === userData.id;
      }
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (params.id === undefined) {
          this.router.navigate(['/menu']);
          return false;
        }
        this.eventId = params.id;
        this.getEventData();
      }
    );
  }
}
