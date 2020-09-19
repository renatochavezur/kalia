import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service'
import { ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  touches = 0;
  qrTouched = false;
  fullname = '';
  phone = '';
  dni = '';
  birthDay = new Date();
  occupation = '';
  email = '';
  identificationCode = '';

  showPhone = false;
  showDni = false;
  showBirthDay = false;
  showOccupation = false;
  showEmail = false;

  constructor(
    private userDataService: UserDataService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loadUserData();
  }

  allowQr() {
    this.touches++;
    setTimeout(() => {
      if (this.touches === 1) {
        this.touches = 0;
      }
      if (this.touches > 1) {
        this.touches = 0;
        this.qrTouched = true;
      }
    }, 250);
  }

  submitUserData() {
    const data = {
      'fullname': this.fullname,
      'phone': this.phone,
      'email': this.email,
      'birth_day': this.birthDay.getFullYear() + '-' + this.birthDay.getMonth() + '-' + this.birthDay.getDay(),
      'dni': this.dni,
      'occupation': this.occupation,
      'show_birth_day': this.showBirthDay,
      'show_dni': this.showDni,
      'show_email': this.showEmail,
      'show_occupation': this.showOccupation,
      'show_phone': this.showPhone
    }
    this.profileService.updateUserData(data).subscribe(response => {
      this.setLocalUserData();
    },
    error => {
      console.warn('Hubo un problema al actualizar la data');
    });
  }

  loadUserData() {
    let authData = this.userDataService.getAuthUserData();
    let userData = authData.user;
    if (userData.birth_day) {
      this.birthDay = new Date(userData.birth_day);
    }
    if (userData.fullname) {
      this.fullname = userData.fullname;
    }
    if (userData.phone) {
      this.phone = userData.phone;
    }
    if (userData.dni) {
      this.dni = userData.dni;
    }
    if (userData.occupation) {
      this.occupation = userData.occupation;
    }
    if (userData.email) {
      this.email = userData.email;
    }
    if(userData.show_phone) {
      this.showPhone = userData.show_phone;
    }
    if(userData.show_dni) {
      this.showDni = userData.show_dni;
    }
    if(userData.show_birth_day) {
      this.showBirthDay = userData.show_birth_day;
    }
    if(userData.show_occupation) {
      this.showOccupation = userData.show_occupation;
    }
    if(userData.show_email) {
      this.showEmail = userData.show_email;
    }
    if(userData.identification_code) {
      this.identificationCode = userData.identification_code;
    }
  }

  setLocalUserData() {
    let authData = this.userDataService.getAuthUserData();
    let userData = authData.user;
    userData.birth_day = this.birthDay;
    userData.fullname = this.fullname;
    userData.phone = this.phone;
    userData.dni = this.dni;
    userData.occupation = this.occupation;
    userData.email = this.email;
    userData.show_phone = this.showPhone;
    userData.show_dni = this.showDni;
    userData.show_birth_day = this.showBirthDay;
    userData.show_occupation = this.showOccupation;
    userData.show_email = this.showEmail;
    authData.user = userData;
    this.userDataService.setAuthUserData(authData);
  }
}
