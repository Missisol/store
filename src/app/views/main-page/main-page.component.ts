import {Component, OnInit} from '@angular/core';
import {IGadget, ICard, ICategory} from '@shared/interfaces/store';
import {ProductsService} from '@shared/services/products.service';
import {CartService} from '@shared/services/cart.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  loading = false;
  cards: ICard[] = [];
  newCards: ICard[] = [];

  categories: ICategory[] = [
    {
      title: 'AirPods',
      text: 'Больше звука. Больше невесомости.',
      price: 13500,
      background: '#FBFBFB',
      img: '../../../assets/images/categories/cat-one.png',
    },
    {
      title: 'AppleWatch',
      text: 'Таких часов вы еще не видели.',
      price: 24500,
      background: '#F3EAE8',
      img: '../../../assets/images/categories/cat-two.png',
    },
    {
      title: 'AppleTV',
      text: 'Телевидение. Наше все.',
      price: 24500,
      background: '#F0EBDB',
      img: '../../../assets/images/categories/cat-three.png',
    },
    {
      title: 'Аксессуары',
      text: 'Сертифицированная продукция высокого качества.',
      price: 2500,
      background: '#EBECEF',
      img: '../../../assets/images/categories/cat-four.png',
    },
  ];

  recentCards: ICard[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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


  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.getPopularCards();
    this.getNewCards();
  }

  getPopularCards() {
    this.loading = true;
    this.productsService.getPopularCards()
      .subscribe(cards => {
        // console.log('res', cards);

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
        // console.log('res', newCards);

        this.newCards = newCards;
        this.loading = false;
      }, error => {
        console.log(error.message);
      });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.cartService.getItems();
  }


}
