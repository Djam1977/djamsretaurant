import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newheaders = new HttpHeaders().append(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );

    const modifiedReq = request.clone({ headers: newheaders });
    return next.handle(modifiedReq);
  }
}
