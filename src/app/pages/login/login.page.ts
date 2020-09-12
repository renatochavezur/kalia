import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  incorrectData = false;
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.incorrectData = false;
  }

  login() {
    if (this.form.valid) {
      this.form.disable();
      this.incorrectData = false;
      this.router.navigate(['/menu']);
      this.form.enable();
    }
    else {
      this.incorrectData = true;
    }
  }

  loginGoogle() {
    this.incorrectData = false;
    this.router.navigate(['/menu']);
  }

  loginFacebook() {
    this.incorrectData = false;
    this.router.navigate(['/menu']);
  }

}
