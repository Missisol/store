import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SliderComponent } from './slider/slider.component';
import { PopularComponent } from './popular/popular.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewGoodsComponent } from './new-goods/new-goods.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { RecentComponent } from './recent/recent.component';
import { SeoComponent } from './seo/seo.component';
import { GadgetCardComponent } from './gadget-card/gadget-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MainPageRoutingModule } from '@views/main-page/main-page-routing.module';


const components = [
    MainPageComponent,
    SliderComponent,
    PopularComponent,
    CategoriesComponent,
    NewGoodsComponent,
    GadgetsComponent,
    RecentComponent,
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
