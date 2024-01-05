import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelatedProductsComponent } from './related-products/related-products.component';

export const RELATED_PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: RelatedProductsComponent,
  }
];

@NgModule({
  declarations: [
    RelatedProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RELATED_PRODUCT_ROUTES),
  ],
  exports: [
    RelatedProductsComponent
  ]
})
export class RelatedProductsModule { }
