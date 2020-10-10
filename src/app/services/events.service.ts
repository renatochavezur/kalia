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

  getEventsList(term=null, owned=null, enrolled=null, code=null): Observable<any> {
    const params = {};
    if (term) {
      params['term'] = term;
    }
    if (owned) {
      params['owned'] = 'true';
    }
    if (enrolled) {
      params['enrolled'] = 'true';
    }
    if (code) {
      params['code'] = code;
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
