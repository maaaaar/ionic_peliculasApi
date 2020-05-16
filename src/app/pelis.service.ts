import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// Formats de busqueda de la api
export enum Tipus {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}
@Injectable({
  providedIn: "root",
})
export class PelisService {
  url = "http://www.omdbapi.com/"; //servidor de la api
  apiKey = "6dd7af14"; //clau necesaria per utilitzar la api

  //http per accedir a la api, son llamadas a internet
  constructor(private http: HttpClient) {}

  //pag pelis, retorna totes les pelis
  buscador(title: string, type: Tipus): Observable<any> {
    //Busquem una pelicula a través del titol i categoria
    return this.http
      .get(
        `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
      )
      .pipe(map((results) => results["Search"]));
  }

  //detalle peliculas
  getDetails(id) {
    //ens retorna tots els detalls d'una peli en concret
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

  //las pelis que has posat com a vistes
  getElementById(id) {
    //ens retorna lo basic d'una peli en concret
    return this.http.get(`${this.url}?i=${id}&apikey=${this.apiKey}`);
  }
}
