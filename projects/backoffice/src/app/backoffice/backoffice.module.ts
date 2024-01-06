import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeHomeComponent } from './backoffice-home/backoffice-home.component';
import { RouterModule, Routes } from '@angular/router';

export const BACK_OFFICE_ROUTES: Routes = [
  {
    path: '',
    component: BackOfficeHomeComponent,
  },
];

@NgModule({
  declarations: [BackOfficeHomeComponent],
  imports: [CommonModule, RouterModule.forChild(BACK_OFFICE_ROUTES)],
})
export class BackOfficeModule {}
