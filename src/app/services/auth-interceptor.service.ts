import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { finalize, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from './user-data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private userDataService: UserDataService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request = req;

    if (this.isValidRequestForInterceptor(request.url)) {
      const authUser = this.userDataService.getAuthUserData();
      if (authUser && authUser.token) {
        request = req.clone({
          setHeaders: { Authorization: 'Token ' + authUser.token }
        });
      }
    }

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error.status === 403) {
          console.error('No tiene permiso para acceder a este recurso');
          const authUser = this.userDataService.getAuthUserData();
          this.router.navigate(['error']);
        } else if (error.status === 404) {
          if (request.method === 'GET') {
            console.warn('Recurso no disponible');
          } else {
            alert('Recurso no disponible');
          }
        } else if (error.status === 400) {
          console.error(error.message);
        } else if (error.status === 500) {
          this.snackBar.open(`Ocurrió un error interno. Intente nuevamente`, 'X');
        } else if (error.message) {
          alert(error.message);
        }
        return throwError(error);
      }),
    );
  }

  private isValidRequestForInterceptor(requestUrl: string) {
    const baseUrl = environment.scheme + environment.apiURL;

    return requestUrl.includes(baseUrl) && !requestUrl.includes('api/auth/request_token');
  }
}
