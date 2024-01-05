import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.router';
import { LayoutComponent } from './layout.component';
import { RelatedProductsModule } from 'projects/related-products/src/app/related-products/related-products.module';
import { BasketModule } from 'projects/basket/src/app/basket/basket.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BasketModule,
    RelatedProductsModule
  ]
})
export class LayoutModule { }
