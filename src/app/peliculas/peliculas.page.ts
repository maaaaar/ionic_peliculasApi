import { Component, OnInit } from "@angular/core";
import { PelisService, Tipus } from "../pelis.service";
import { Observable } from "rxjs"; //per poder manipular les dades de la api

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.page.html",
  styleUrls: ["./peliculas.page.scss"],
})
export class PeliculasPage implements OnInit {
  results: Observable<any>; //tots els objectes de la api, per poder tractarlos
  paraula: string = "";
  type: Tipus = Tipus.all;
  listaVistas: Array<Object> = [];

  constructor(private peliService: PelisService) {}

  ngOnInit() {}

  buscadorModificat() {
    // crides a la funcio service i retorna un observable
    this.results = this.peliService.buscador(this.paraula, this.type);
  }
  //Recuperem lla llista de pelis vistes i afegim la nova
  afegirALlista(id: String) {
    // Comprovem que la llista estigui creada i afegim el valor
    this.listaVistas = this.listaVistas || [];
    this.listaVistas.push(id);
  }
  // Al entrar y salir guarda y recupera los datos de las pelis vistas
  ionViewWillEnter() {
    this.listaVistas = JSON.parse(localStorage.getItem("visto"));
  }
  ionViewWillLeave() {
    localStorage.setItem("visto", JSON.stringify(this.listaVistas));
  }
}
