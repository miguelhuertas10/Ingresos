import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpedirPageRoutingModule } from './expedir-routing.module';

import { ExpedirPage } from './expedir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpedirPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExpedirPage]
})
export class ExpedirPageModule {}
