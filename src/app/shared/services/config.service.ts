import { Injectable } from '@angular/core';
import config from '../../../../config';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor() {
        Object.assign(this, config);
    }

    public apiUrl = '//api.example.com';
}

export function encodeQueryParams(params: object): string {
    let url = '';
    const tmp = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key]));
    if (tmp.length) {
        url += tmp.join('&');
    }
    return url;
}
