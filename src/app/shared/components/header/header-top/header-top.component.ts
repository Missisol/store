import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {IMenu} from '@shared/interfaces/menu';
import {MenuService} from '@shared/services/menu.service';
import {CartService} from '@shared/services/cart.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit,
  AfterContentChecked {

  topMenuItems: IMenu[];
  counter = 0;
  isVisible;

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.getTopMenu();
    this.getTotalCount();
  }

  ngAfterContentChecked(): void {
    this.getTotalCount();
  }

  getTopMenu() {
    this.menuService.getTopMenu()
      .subscribe(res => {
        // console.log('response', res);
        this.topMenuItems = res;
      });
  }

  toggleCart(e) {
    this.cartService.toggleCart(e);
  }

  getTotalCount() {
    this.counter = this.cartService.getTotalCount();
    this.counter > 0 ? this.isVisible = 1 : this.isVisible = 0;
  }
}
