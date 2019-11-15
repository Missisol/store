import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderTopComponent} from './header/header-top/header-top.component';
import {HeaderBottomComponent} from './header/header-bottom/header-bottom.component';
import {FooterTopComponent} from './footer/footer-top/footer-top.component';
import {FooterBottomComponent} from './footer/footer-bottom/footer-bottom.component';
import {SeoComponent} from '@shared/components/seo/seo.component';
import {GadgetCardComponent} from '@shared/components/gadget-card/gadget-card.component';
import {ProductCardComponent} from '@shared/components/product-card/product-card.component';
import {TruncatePipe} from '@shared/pipes/truncate.pipe';
import {CapitalizePipe} from '@shared/pipes/capitalize.pipe';
import { DropdownCartComponent } from './dropdown-cart/dropdown-cart.component';

const components = [
  HeaderComponent,
  FooterComponent,
  HeaderTopComponent,
  HeaderBottomComponent,
  FooterTopComponent,
  FooterBottomComponent,
  SeoComponent,
  GadgetCardComponent,
  ProductCardComponent,
  DropdownCartComponent
];

@NgModule({
  declarations: [
    components,
    TruncatePipe,
    CapitalizePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: components,
  entryComponents: components,
})
export class SharedComponentsModule {
}
