import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  api='http://localhost:5000/'; //RUTA AL SERVIDOR

  apiBusqueda='https://api.themoviedb.org/3/search/movie?api_key=dfe3234b957f307e6e0db40c7052c2db&language=es&query='
  constructor(private http : HttpClient) { }

  //MÉTODOS QUE SE COMUNICAN CON EL SERVIDOR
  traerPeliculas(){
    return this.http.get(this.api);
  }

  cargarNuevaPelicula(idPelicula:number){
    return this.http.post(this.api+'cargar/'+idPelicula,{}); //necesita un body
  }

  modificarPelicula(pelicula:any){
    return this.http.put(this.api+'modificar',pelicula)
  }

  eliminarPelicula(idPelicula:number){
    return this.http.delete(this.api+'eliminar/'+idPelicula);
  }

  consultaPeliculas(busqueda:string){
    return this.http.get(this.apiBusqueda+busqueda);
  }

  //traigo pelicula x id
  traerPelixId(id:string){
    return this.http.get(this.api+'buscar/'+id);
  }

}

