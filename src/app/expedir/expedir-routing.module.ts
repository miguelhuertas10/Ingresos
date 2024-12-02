import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedirPage } from './expedir.page';

const routes: Routes = [
  {
    path: '',
    component: ExpedirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpedirPageRoutingModule {}
