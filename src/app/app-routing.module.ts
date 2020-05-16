import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "vistes",
    loadChildren: () =>
      import("./vistes/vistes.module").then((m) => m.VistesPageModule),
  },
  {
    path: "peliculas",
    loadChildren: () =>
      import("./peliculas/peliculas.module").then((m) => m.PeliculasPageModule),
  },
  {
    path: "detall-peliculas",
    loadChildren: () =>
      import("./detall-peliculas/detall-peliculas.module").then(
        (m) => m.DetallPeliculasPageModule
      ),
  },
  {
    path: "peliculas/:id",
    loadChildren: () =>
      import("./detall-peliculas/detall-peliculas.module").then(
        (m) => m.DetallPeliculasPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
