import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  touches = 0;
  qrTouched = false;

  constructor() { }

  ngOnInit() {
  }

  allowQr() {
    this.touches++;
    setTimeout(() => {
      if(this.touches == 1) {
        this.touches = 0;
      }
      if (this.touches > 1) {
        this.touches = 0;
        this.qrTouched = true;
      }
    }, 250);
  }
}
