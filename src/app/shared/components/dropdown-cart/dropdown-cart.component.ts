import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {ICard} from '@shared/interfaces/store';
import {CartService} from '@shared/services/cart.service';

@Component({
  selector: 'app-dropdown-cart',
  templateUrl: './dropdown-cart.component.html',
  styleUrls: ['./dropdown-cart.component.scss']
})
export class DropdownCartComponent implements OnInit,
  AfterContentChecked {

  @Input() products: ICard[] = [];
  totalSum = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getItems();
    this.getTotalSum();
  }

  ngAfterContentChecked(): void {
    this.getItems();
    this.getTotalSum();
  }

  getItems() {
    this.products = this.cartService.getItems();
  }

  deleteProduct(productId) {
    this.cartService.deleteProduct(productId);
  }

  addToCart(product) {
    // console.log(product);
    this.cartService.addToCart(product);
    this.cartService.getItems();
  }

  removeItem(product) {
    this.cartService.removeItem(product);
    this.cartService.getItems();
  }

  getTotalSum() {
    this.totalSum = this.cartService.getTotalSum();
  }

}
