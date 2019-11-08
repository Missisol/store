import {Component, OnInit} from '@angular/core';
import {ITopMenu} from '@shared/interfaces/menu';
import {HttpClient} from '@angular/common/http';
import {MenuService} from '@shared/services/menu.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

  topMenuItems: ITopMenu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getTopMenu();
  }

  getTopMenu() {
    this.menuService.getTopMenu()
      .subscribe(res => {
        console.log('response', res);
        this.topMenuItems = res;
      });
  }

}
