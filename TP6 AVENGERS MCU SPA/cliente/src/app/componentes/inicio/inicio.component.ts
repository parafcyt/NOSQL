import { Component, OnInit } from '@angular/core';

//IMPORTO SERVICIO
import { PeliculasService } from '../../servicios/peliculas.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  peliculas;
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.peliculaService.traerPeliculas().subscribe(res=>{
      this.peliculas=res;
    });
  }

}
