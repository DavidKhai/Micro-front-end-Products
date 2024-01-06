import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basket',
    loadChildren: () =>
      import('basket/BasketModule').then((m) => m.BasketModule),
  },
  {
    path: 'related-products',
    loadChildren: () =>
      import('relatedProducts/RelatedProductsModule').then(
        (m) => m.RelatedProductsModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('payment/PaymentModule').then((m) => m.PaymentModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('backOffice/BackOfficeModule').then((m) => m.BackOfficeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
