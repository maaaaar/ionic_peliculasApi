import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallPeliculasPageRoutingModule } from './detall-peliculas-routing.module';

import { DetallPeliculasPage } from './detall-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallPeliculasPageRoutingModule
  ],
  declarations: [DetallPeliculasPage]
})
export class DetallPeliculasPageModule {}
