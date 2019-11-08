import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITopMenu} from '@shared/interfaces/menu';
import {IResponse} from '@shared/interfaces/store';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getTopMenu(): Observable<ITopMenu[]> {
    return this.http.get<IResponse<ITopMenu[]>>('http://api-megapolis.amberlight.io/menu/main/')
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }
}
