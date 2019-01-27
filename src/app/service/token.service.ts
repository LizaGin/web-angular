import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req, next) {
    if (this.router.url === '/login') {
      return next.handle(req);
    }

    const tokenizedReq = req.clone({
      setHeaders: {
        'x-authorization': localStorage.getItem('jwt')
      }
    });
    return next.handle(tokenizedReq);
  }
}
