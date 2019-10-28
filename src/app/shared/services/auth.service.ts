import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IJWT, IToken } from '@shared/interfaces/token';
import { ConfigService } from '@shared/services/config.service';
import * as jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router,
                private config: ConfigService,
                private http: HttpClient) {
    }

    public get authenticated() {
        const jwtToken = decodeToken(this.token);
        if (!jwtToken) {
            return false;
        }

        return new Date() < new Date(jwtToken.exp * 1000);
    }

    public get token() {
        return localStorage.getItem('access');
    }

    getUser() {
        return of({});
    }

    signIn(credentials) {
        this.http.post<IToken>(`${this.config.apiUrl}/token/`, credentials)
            .subscribe(
                res => {
                    localStorage.setItem('access', res.access);
                    localStorage.setItem('refresh', res.refresh);
                }
            );

        return of({}).pipe(delay(1500));
    }

    signOut() {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.router.navigateByUrl('/success-url');  // TODO: change
    }
}

export function decodeToken(token: string): IJWT {
    try {
        return jwt_decode(token);
    } catch (e) {
        // console.error(e);
        return null;
    }
}
