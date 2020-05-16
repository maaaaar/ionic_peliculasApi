import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallPeliculasPage } from './detall-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallPeliculasPageRoutingModule {}
