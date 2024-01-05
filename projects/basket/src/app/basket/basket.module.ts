import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasketHomeComponent } from './basket-home/basket-home.component';
import { BasketDetailComponent } from './basket-detail/basket-detail.component';

export const  BASKET_ROUTES: Routes = [
  {
    path: '',
    component: BasketHomeComponent,
  }
];

@NgModule({
  declarations: [
    BasketHomeComponent,
    BasketDetailComponent
  ],
  exports: [
    BasketDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BASKET_ROUTES),
  ]
})
export class BasketModule { }
