import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PelisService } from "../pelis.service";

@Component({
  selector: "app-detall-peliculas",
  templateUrl: "./detall-peliculas.page.html",
  styleUrls: ["./detall-peliculas.page.scss"],
})
export class DetallPeliculasPage implements OnInit {
  titol = "Detall de la pelicula";
  information;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: PelisService
  ) {}

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    // Get the information from the API
    this.movieService.getDetails(id).subscribe((result) => {
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, "_blank");
  }
}
