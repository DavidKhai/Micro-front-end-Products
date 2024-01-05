import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'related-products',
    pathMatch: 'full'
  },
  {
    path: 'related-products',
    loadChildren: () => import('./related-products/related-products.module').then(m => m.RelatedProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
