import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EventsService } from '../../../../services/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {

  eventForm: FormGroup;

  event: any;
  eventId = 0;
  own = false;

  constructor(
    private eventsService: EventsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserDataService,
  ) { }

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

  updateEvent() {
    const formData = this.eventForm.value;
    const data = {
      name: formData.name,
      summary: formData.summary,
      description: formData.description,
      mode: formData.mode,
      place: formData.place,
      maps_url: formData.mapsUrl,
      meeting_url: formData.meetUrl,
      start_time: formData.startTime,
      end_time: formData.endTime,
    };
    this.eventsService.updateEvent(data, this.eventId).subscribe(
      (response: any) => {
        this.router.navigate(['/menu/events/event'], { queryParams: { id: response.id } });
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getFormData() {
    this.eventForm = new FormGroup({
      name: new FormControl(this.event.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      summary: new FormControl(this.event.summary, [
        Validators.required,
        Validators.minLength(5)
      ]),
      mode: new FormControl(this.event.mode, [
        Validators.required
      ]),
      startTime: new FormControl(this.event.start_time, [
        Validators.required
      ]),
      endTime: new FormControl(this.event.end_time, [
        Validators.required
      ]),
      description: new FormControl(this.event.description, []),
      place: new FormControl(this.event.place, []),
      meetUrl: new FormControl(this.event.meeting_url, []),
      mapsUrl: new FormControl(this.event.maps_url, []),
    });
  }

  getEventData() {
    const userData = this.userDataService.getAuthUserData();
    this.eventsService.getEventData(this.eventId).subscribe(
      response => {
        this.event = response;
        this.own = this.event.own === userData.id;
        this.getFormData();
      }
    );
  }
}
