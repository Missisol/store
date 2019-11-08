import {Component, OnInit} from '@angular/core';
import {IGadget, ICard} from '@shared/interfaces/store';
import {ProductsService} from '@shared/services/products.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    cards: ICard[] = [];
    newCards: ICard[] = [];
    loading = false;

    recentCards: ICard[] = [
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
        {
            discount: '-2000',
            model: {
                category: {
                    name: 'Телефон'
                },
                photo: {
                    img: 'https://via.placeholder.com/260x222.png'
                }
            },
            memory: {
                name: '64Гб'
            },
            name: 'Apple iPhone 11 128 ГБ белый',
            color: {
                name: 'золотой'
            },
            price: 64990
        },
    ];

    gadgets: IGadget[] = [
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '2'
        },
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '12'
        },
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '2'
        },
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '43'
        },
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '2'
        },
        {
            title: 'Умные игрушки',
            imagePath: 'https://via.placeholder.com/250x180.png',
            imageTabletPath: 'https://via.placeholder.com/216x163.png',
            imagePhonePath: 'https://via.placeholder.com/166x125.png',
            amount: '2'
        },
    ];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.getPopularCards();
        this.getNewCards();
    }

    getPopularCards() {
        this.loading = true;
        this.productsService.getPopularCards()
            .subscribe( cards => {
                console.log('resp', cards);

                this.cards = cards;
                this.loading = false;
            }, error => {
                console.log(error.message);
            });
    }

    getNewCards() {
        this.loading = true;
        this.productsService.getNewCards()
            .subscribe(newCards => {
                console.log('resp', newCards);

                this.newCards = newCards;
                this.loading = false;
            }, error => {
                console.log(error.message);
            });
    }

}
