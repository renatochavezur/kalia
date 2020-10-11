import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl = environment.scheme + environment.apiURL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  createEvent(
    data: any
  ): Observable<any> {
    return this.http.post(
      this.baseUrl + 'events/',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }

  updateEvent(
    data: any,
    id
  ): Observable<any> {
    return this.http.patch(
      this.baseUrl + 'events/' + id + '/',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }

  getEventsList(term = null, owned = null, enrolled = null, code = null, status = null): Observable<any> {
    const params = {};
    const TERM = 'term';
    const OWNED = 'owned';
    const ENROLLED = 'enrolled';
    const CODE = 'code';
    const STATUS = 'status';
    if (term) {
      params[TERM] = term;
    }
    if (owned) {
      params[OWNED] = 'true';
    }
    if (enrolled) {
      params[ENROLLED] = 'true';
    }
    if (code) {
      params[CODE] = code;
    }
    if (status) {
      params[STATUS] = status;
    }
    return this.http.get(
      this.baseUrl + 'events/',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params
      },
    );
  }

  getEventData(id): Observable<any> {
    return this.http.get(
      this.baseUrl + 'events/' + id + '/'
    );
  }
}
