import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.scheme + environment.apiURL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  updateUserData(
    data: any
  ): Observable<any> {
    return this.http.put(
      this.baseUrl + 'users/user_data/',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}
