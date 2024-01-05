import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHomeComponent } from './payment-home/payment-home.component';

export const  PAYMENT_ROUTES: Routes = [
  {
    path: '',
    component: PaymentHomeComponent,
  }
];

@NgModule({
  declarations: [
    PaymentHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PAYMENT_ROUTES),
  ]
})
export class PaymentModule { }
