import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserDataService } from '../../services/user-data.service'
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private loginService: LoginService,
    private userDataService: UserDataService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.incorrectData = false;
  }

  login() {
    if (this.form.valid) {
      this.form.disable();
      this.incorrectData = false;
      this.loginService.loginUser(this.form.value).subscribe(
        (result: any) => {
          this.form.enable();
          if (result.user) {
            this.setUserData(result);
            this.router.navigate(['/menu']);
          } else {
            alert('Error accesing . Please try again');
          }
        },
        error => {
          this.openSnackBar('Usuario o contraseña incorrecto', 'X');
          this.form.enable();
          this.incorrectData = true;
        }
      );
    }
    else {
      this.incorrectData = true;
    }
  }

  setUserData(userSessionData) {
    this.userDataService.setAuthUserData(userSessionData);
  }

  loginGoogle() {
    this.incorrectData = false;
    this.router.navigate(['/menu']);
  }

  loginFacebook() {
    this.incorrectData = false;
    this.router.navigate(['/menu']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
