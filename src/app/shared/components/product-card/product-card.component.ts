import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '@shared/interfaces/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() card: ICard;
  @Output() cardClick = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit() {
  }

  click(card) {
    this.cardClick.emit(card);
  }

}
