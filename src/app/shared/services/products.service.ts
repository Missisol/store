import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICard, IResponse} from '@shared/interfaces/store';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {
  }
    getPopularCards(): Observable<ICard[]> {
    return this.http.get<IResponse<ICard[]>>('http://api-megapolis.amberlight.io/products/popular/')
    .pipe(
      map(res => res.results),
      catchError(error => {
        console.log(error.message);
        return throwError(error);
      })
    );
  }
  // TODO remove this temporary solution
  getNewCards(): Observable<ICard[]> {
    return this.http.get<IResponse<ICard[]>>('http://api-megapolis.amberlight.io/products/popular/')
    .pipe(
      map(res => res.results),
      catchError(error => {
        console.log(error.message);
        return throwError(error);
      })
    );
  }
  // getNewCards(): Observable<ICard[]> {
  //   return this.http.get<IResponse<ICard[]>>('http://api-megapolis.amberlight.io/products/new/')
  //   .pipe(
  //     map(res => res.results),
  //     catchError(error => {
  //       console.log(error.message);
  //       return throwError(error);
  //     })
  //   );
  // }
  }
