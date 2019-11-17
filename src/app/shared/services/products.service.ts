import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICard, IResponse} from '@shared/interfaces/store';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ConfigService} from '@shared/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private config: ConfigService,
              private http: HttpClient) {
  }

  getPopularCards(): Observable<ICard[]> {
    return this.http.get<IResponse<ICard[]>>(`${this.config.apiUrl}/products/popular/`)
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
    return this.http.get<IResponse<ICard[]>>(`${this.config.apiUrl}/products/product/`)
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }

  // getNewCards(): Observable<ICard[]> {
  //   return this.http.get<IResponse<ICard[]>>(`${this.config.apiUrl}/products/new/`)
  //   .pipe(
  //     map(res => res.results),
  //     catchError(error => {
  //       console.log(error.message);
  //       return throwError(error);
  //     })
  //   );
  // }
}
