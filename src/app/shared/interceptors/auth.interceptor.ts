import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@shared/services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.auth.token;
        const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
        return next.handle(authReq)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.auth.signOut();
                    } else {
                        return throwError(error);
                    }
                })
            );
    }
}
