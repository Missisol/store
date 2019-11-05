import {Component, Input, OnInit} from '@angular/core';
import {Card} from '@views/main-page/main-page.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() card: Card

  constructor() { }

  ngOnInit() {
  }

}
