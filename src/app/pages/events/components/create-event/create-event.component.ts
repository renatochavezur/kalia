import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EventsService } from '../../../../services/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {

  eventForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    summary: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    mode: new FormControl('', [
      Validators.required
    ]),
    startTime: new FormControl('', [
      Validators.required
    ]),
    endTime: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', []),
    place: new FormControl('', []),
    meetUrl: new FormControl('', []),
    mapsUrl: new FormControl('', []),
  });

  constructor(
    private eventsService: EventsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {}

  createEvent() {
    const formData = this.eventForm.value
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
    }
    this.eventsService.createEvent(data).subscribe(
      (response: any) => {
        this.router.navigateByUrl('/menu/events/edit-event');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
