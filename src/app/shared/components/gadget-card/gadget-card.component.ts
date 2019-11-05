import {Component, Input, OnInit} from '@angular/core';
import {Gadget} from '@views/main-page/main-page.component';

@Component({
  selector: 'app-gadget-card',
  templateUrl: './gadget-card.component.html',
  styleUrls: ['./gadget-card.component.scss']
})
export class GadgetCardComponent implements OnInit {
  
  @Input() gadget: Gadget

  constructor() { }

  ngOnInit() {
  }

}
