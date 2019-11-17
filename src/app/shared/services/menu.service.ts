import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMenu} from '@shared/interfaces/menu';
import {IResponse} from '@shared/interfaces/store';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ConfigService} from '@shared/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private config: ConfigService,
              private http: HttpClient) { }

  getTopMenu(): Observable<IMenu[]> {
    return this.http.get<IResponse<IMenu[]>>(`${this.config.apiUrl}/menu/main/`)
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }

  getBottomMenu(): Observable<IMenu[]> {
    return this.http.get<IResponse<IMenu[]>>(`${this.config.apiUrl}/menu/product/`)
      .pipe(
        map(res => res.results),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }
}
