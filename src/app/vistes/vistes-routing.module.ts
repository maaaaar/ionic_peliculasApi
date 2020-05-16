import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistesPage } from './vistes.page';

const routes: Routes = [
  {
    path: '',
    component: VistesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistesPageRoutingModule {}
