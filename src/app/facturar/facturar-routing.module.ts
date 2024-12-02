import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturarPage } from './facturar.page';

const routes: Routes = [
  {
    path: '',
    component: FacturarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturarPageRoutingModule {}
