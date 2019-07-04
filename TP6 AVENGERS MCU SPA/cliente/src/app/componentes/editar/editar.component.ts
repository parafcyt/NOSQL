import { Component, OnInit } from '@angular/core';

//IMPORTO SERVICIO
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  peliculas;
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.peliculaService.traerPeliculas().subscribe(res=>{
      this.peliculas=res;
    });
  }

}
