import { Component, OnInit } from '@angular/core';
import { IGadget, ICard } from '@shared/interfaces/store';


@Component({
    selector   : 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls  : ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    cards: ICard[] = [
        {
            discount      : '-1000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
    ];

    newCards: ICard[] = [
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '',
            price         : '64 990'
        },
    ];

    recentCards: ICard[] = [
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
        {
            discount      : '-2000',
            imagePath     : 'https://via.placeholder.com/260x222.png',
            imagePhonePath: 'https://via.placeholder.com/222x160.png',
            caption       : 'Apple iPhone 11 128 ГБ белый Apple iPhone 11 12ый 11 128 ГБ Apple ff iPhone 11 12ый 11 128 ГБ\n',
            oldPrice      : '113 999',
            price         : '64 990'
        },
    ];

    gadgets: IGadget[] = [
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
        {
            title          : 'Умные игрушки',
            imagePath      : 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath : 'https://via.placeholder.com/166x125.png',
            amount         : '2'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
