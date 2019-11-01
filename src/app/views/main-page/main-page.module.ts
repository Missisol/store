import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SeoComponent } from './seo/seo.component';
import { GadgetCardComponent } from './gadget-card/gadget-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MainPageRoutingModule } from '@views/main-page/main-page-routing.module';


const components = [
    MainPageComponent,
    SeoComponent,
    GadgetCardComponent,
    ProductCardComponent,
];


@NgModule({
    declarations: components,
    imports     : [
        CommonModule,
        MainPageRoutingModule,
    ]
})
export class MainPageModule {
}
