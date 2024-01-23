import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
    // hacer algo.
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (localStorage.getItem('token')) {      
      if(request.url != 'https://app.semarnat.gob.mx/ws-authserver-desa/ws-sinat-tramites/seguridad/') {
          request = this.addToken(request, localStorage.getItem('token')!);
      }
    }
    return next.handle(request).pipe();
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
