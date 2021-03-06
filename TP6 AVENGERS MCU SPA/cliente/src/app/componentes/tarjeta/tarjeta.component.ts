import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() pelicula; //en variable pelicula carga lo que manda el componente inicio
  rutaPoster='https://image.tmdb.org/t/p/w500'
  constructor() { }

  ngOnInit() {
    console.log(this.pelicula['id']); //= a this.pelicula.id
    this.rutaPoster+=this.pelicula.poster_path;
  }

}
