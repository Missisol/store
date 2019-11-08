import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMenu} from '@shared/interfaces/menu';
import {IResponse} from '@shared/interfaces/store';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getTopMenu(): Observable<IMenu[]> {
    return this.http.get<IResponse<IMenu[]>>('http://api-megapolis.amberlight.io/menu/main/')
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }

  getBottomMenu(): Observable<IMenu[]> {
    return this.http.get<IResponse<IMenu[]>>('http://api-megapolis.amberlight.io/menu/product/')
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }
}
