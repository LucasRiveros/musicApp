import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token: string = 'BQDK3Bnzk2_5HXdqya99bXKwKW6yjHIlt7W2KWiD_Q_BBIhuTDbLz_PdvI_gHPJZVCQJUtx5NykExmj5Txs';

    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    });
    
    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.handleErorr )
    );
  }

  handleErorr( error: HttpErrorResponse ) {
    console.warn(error);
    return throwError('Please check your token');
  }
}
