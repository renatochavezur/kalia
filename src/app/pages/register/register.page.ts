import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isVerificationForm = false;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  verificationForm = new FormGroup({
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
  });


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToVerificationForm() {
    this.isVerificationForm = true;
  }

  register() {
    console.log('register');
  }

  goToLogin() {
    this.isVerificationForm = false;
    this.router.navigateByUrl('login');
  }

}
