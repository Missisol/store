import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {MainPageRoutingModule} from '@views/main-page/main-page-routing.module';
import {SharedComponentsModule} from '@shared/components/components.module';


const components = [
  MainPageComponent,
];


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedComponentsModule
  ]
})
export class MainPageModule {
}
