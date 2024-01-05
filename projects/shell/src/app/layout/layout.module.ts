import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.router';
import { LayoutComponent } from './layout.component';
import { RelatedProductsModule } from 'projects/related-products/src/app/related-products/related-products.module';
import { BasketModule } from 'projects/basket/src/app/basket/basket.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BasketModule,
    RelatedProductsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
