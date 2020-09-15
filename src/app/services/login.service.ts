import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  baseUrl = environment.scheme + environment.apiURL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  loginUser(
    credentials: any
  ): Observable<any> {
    return this.http.post(
      this.baseUrl + 'auth/request_token/',
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}
