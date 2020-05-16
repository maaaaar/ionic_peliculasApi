import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "peliculas",
        loadChildren: () =>
          import("../peliculas/peliculas.module").then(
            (m) => m.PeliculasPageModule
          ),
      },
      {
        path: "vistes",
        loadChildren: () =>
          import("../vistes/vistes.module").then((m) => m.VistesPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/peliculas",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/peliculas",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
