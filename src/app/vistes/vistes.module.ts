import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistesPageRoutingModule } from './vistes-routing.module';

import { VistesPage } from './vistes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistesPageRoutingModule
  ],
  declarations: [VistesPage]
})
export class VistesPageModule {}
