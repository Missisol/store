import {Injectable} from '@angular/core';
import {ICard} from '@shared/interfaces/store';
import {AuthService} from '@shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public authService: AuthService) {
  }

  addToCart(product: ICard, quantity: number = 0) {
    if (!this.authService.authenticated) {
      let items = [];
      const products = localStorage.getItem('products');
      if (!!products) {
        items = JSON.parse(products);
      }

      const newItems = items.filter(item => item.id === product.id);
      if (newItems.length > 0) {
        items.map(item => {
          if (item.id === product.id) {
            item.quantity++;
          }
        });
      } else {
        items.push({
          ...product,
          quantity: ++quantity,
        });
      }
      localStorage.setItem(`products`, JSON.stringify(items));
    }
  }

  // TODO modified addToCart()
  // addToCart(product: ICard, quantity: number = 1) {
  //   if (!this.authService.authenticated) {
  //     let items = [];
  //     const products = localStorage.getItem('products');
  //     if (!!products) {
  //       items = JSON.parse(products);
  //     }
  //
  //     const newItems = items.filter(item => item.id === product.id);
  //     if (newItems.length > 0) {
  //       items.map(item => {
  //         if (item.id === product.id) {
  //           item.quantity = product.quantity + quantity;
  //         }
  //       });
  //     } else {
  //       items.push({
  //         ...product,
  //         quantity
  //       });
  //     }
  //     localStorage.setItem(`products`, JSON.stringify(items));
  //   }
  // }


  getItems() {
    return JSON.parse(localStorage.getItem(`products`));
  }

  getTotalSum() {
    let sum = 0;
    const items = JSON.parse(localStorage.getItem(`products`));
    items.map(item => {
      sum += item.price * item.quantity;
    });
    return sum;
  }

  getTotalCount() {
    let counter = 0;
    const items = JSON.parse(localStorage.getItem(`products`));
    items.map(item => {
      counter += item.quantity;
    });
    return counter;
  }

  deleteProduct(productId) {
    if (!this.authService.authenticated) {
      const items = JSON.parse(localStorage.getItem(`products`));
      localStorage.setItem('products', JSON.stringify
      (items.filter(item => item.id !== productId)));
    }
  }

  removeItem(product: ICard) {
    if (!this.authService.authenticated) {
      let items = [];
      if (localStorage.getItem(`products`)) {
        items = JSON.parse(localStorage.getItem(`products`));
      }

      if (items.filter(item => item.id === product.id).length > 0) {
        items.map(item => {
          if (item.id === product.id) {
            item.quantity--;
          }
        });
      }

      if (items.filter(item => item.id === product.id && item.quantity > 0).length === 0) {
        this.deleteProduct(product.id);
      } else {
        localStorage.setItem(`products`, JSON.stringify(items));
      }
    }
  }

  toggleCart(e) {
    const cart = document.querySelector('.cart');
    e && cart.classList.contains('hidden') ? cart.classList.remove('hidden') :
      cart.classList.add('hidden');
  }

  getItemsCount() {
    const items = JSON.parse(localStorage.getItem(`products`));
    return items.length;
  }

  clearCart() {
    //
  }
}
