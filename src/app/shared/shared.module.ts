import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/components.module';


@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule
    ]
})
export class SharedModule {
}
