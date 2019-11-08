import { Component, OnInit } from '@angular/core';
import {IMenu} from '@shared/interfaces/menu';
import {MenuService} from '@shared/services/menu.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent implements OnInit {

  bottomMenuItems: IMenu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getBottomMenu();
  }

  getBottomMenu() {
    this.menuService.getBottomMenu()
      .subscribe(res => {
        console.log('response', res);
        this.bottomMenuItems = res;
      });
  }
}
