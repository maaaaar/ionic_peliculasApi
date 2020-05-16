import { Component, OnInit } from "@angular/core";
import { PelisService, Tipus } from "../pelis.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-vistes",
  templateUrl: "./vistes.page.html",
  styleUrls: ["./vistes.page.scss"],
})
export class VistesPage implements OnInit {
  results;
  type: Tipus = Tipus.all;
  listaVistas: Array<any> = [];
  listaPeliculas: Array<any>;

  constructor(private peliService: PelisService) {}

  ngOnInit() {}
  // Al entrar y salir guarda y recupera los datos de las pelis vistas
  ionViewWillEnter() {
    this.listaVistas = JSON.parse(localStorage.getItem("visto"));
    console.log("listaVistas:", this.listaVistas);
    this.capturarDades();
  }
  capturarDades() {
    this.listaVistas = this.listaVistas || [];
    this.listaPeliculas = [];
    for (let item of this.listaVistas) {
      this.peliService
        .getElementById(item)
        .toPromise()
        .then((datos) => {
          //afegeix la peli a la listaPEliculas
          this.listaPeliculas.push(datos);
        });
    }
  }
  ionViewWillLeave() {
    localStorage.setItem("visto", JSON.stringify(this.listaVistas));
  }
  eliminarDeLlista(id) {
    //eliminem el element que hem seleccionat
    this.listaVistas.splice(id, 1);
    console.log("eliminats:", id);
  }
}
