import { Component, Input, OnInit } from '@angular/core';
import { IGadget } from '@shared/interfaces/store';

@Component({
    selector   : 'app-gadget-card',
    templateUrl: './gadget-card.component.html',
    styleUrls  : ['./gadget-card.component.scss']
})
export class GadgetCardComponent implements OnInit {

    @Input() gadget: IGadget;

    constructor() {
    }

    ngOnInit() {
    }

}
