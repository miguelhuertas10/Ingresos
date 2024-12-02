import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibirPage } from './recibir.page';

const routes: Routes = [
  {
    path: '',
    component: RecibirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibirPageRoutingModule {}
