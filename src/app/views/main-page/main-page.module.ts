import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { GadgetCardComponent } from './gadget-card/gadget-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MainPageRoutingModule } from '@views/main-page/main-page-routing.module';
import {SharedComponentsModule} from '@shared/components/components.module';


const components = [
    MainPageComponent,
    GadgetCardComponent,
    ProductCardComponent,
];


@NgModule({
    declarations: components,
    imports     : [
        CommonModule,
        MainPageRoutingModule,
        SharedComponentsModule
    ]
})
export class MainPageModule {
}
