import { Component, OnInit, Input } from '@angular/core';

//IMPORTO SERVICIO
import { PeliculasService } from '../../servicios/peliculas.service';


@Component({
  selector: 'app-tarjeta-agregar',
  templateUrl: './tarjeta-agregar.component.html',
  styleUrls: ['./tarjeta-agregar.component.css']
})
export class TarjetaAgregarComponent implements OnInit {

  @Input() pelicula;

  rutaPoster='https://image.tmdb.org/t/p/w500'

  constructor(private peliculasServicio: PeliculasService) { }

  ngOnInit() {
    console.log(this.pelicula);
    this.rutaPoster+=this.pelicula.poster_path;
    
  }

  agregar(id:number){
    console.log(id);
    //SE LO MANDO AL SERVICIO
    this.peliculasServicio.cargarNuevaPelicula(id).subscribe(res=>{
      console.log(res);
      
    });
    

  }

}
