import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './main-page/slider/slider.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { PopularComponent } from './main-page/popular/popular.component';
import { ProductCardComponent } from './item-components/product-card/product-card.component';
import { CategoriesComponent } from './main-page/categories/categories.component';
import { NewGoodsComponent } from './main-page/new-goods/new-goods.component';
import { RecentComponent } from './main-page/recent/recent.component';
import { GadgetsComponent } from './main-page/gadgets/gadgets.component';
import { GadgetCardComponent } from './item-components/gadget-card/gadget-card.component';
import { SeoComponent } from './main-page/seo/seo.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        HeaderTopComponent,
        HeaderBottomComponent,
        PopularComponent,
        ProductCardComponent,
        CategoriesComponent,
        NewGoodsComponent,
        RecentComponent,
        GadgetsComponent,
        GadgetCardComponent,
        SeoComponent,
        FooterTopComponent,
        FooterBottomComponent,
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
