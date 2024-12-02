import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturarPageRoutingModule } from './facturar-routing.module';

import { FacturarPage } from './facturar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FacturarPage]
})
export class FacturarPageModule {}
