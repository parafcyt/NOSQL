import { Component, OnInit, Input, ElementRef } from '@angular/core';

//SweetAlert
import swal from 'sweetalert2';
//IMPORTO EL SERVICIO
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-tarjeta-editar',
  templateUrl: './tarjeta-editar.component.html',
  styleUrls: ['./tarjeta-editar.component.css']
})
export class TarjetaEditarComponent implements OnInit {

  @Input() pelicula; //en variable pelicula carga lo que manda el componente inicio
  rutaPoster='https://image.tmdb.org/t/p/w500'

  constructor(private peliculasSevice : PeliculasService, private elementref:ElementRef) { }

  ngOnInit() {
    console.log(this.pelicula['id']); //= a this.pelicula.id
    this.rutaPoster+=this.pelicula.poster_path;
  }


  eliminar(){
    swal.fire({
      title: 'Estás seguro?',
      text: "Se eliminará la película "+this.pelicula.title,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.peliculasSevice.eliminarPelicula(this.pelicula.id).subscribe(res=>{
          swal.fire(
            'Eliminado',
            'Se eliminó la película '+this.pelicula.title,
            'success'
          );
          this.elementref.nativeElement.remove();

        });
        
      }
    });

  }

}
