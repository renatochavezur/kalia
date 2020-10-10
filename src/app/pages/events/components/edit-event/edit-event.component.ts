import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {

  eventForm = new FormGroup({
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

  constructor() { }

  ngOnInit() { }

}
