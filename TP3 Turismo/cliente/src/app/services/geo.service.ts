import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//INTERFACE
import { ParaDistancia } from '../interfaces/para-distancia';


@Injectable({
  providedIn: 'root'
})
export class GeoService {

  API_URL= 'http://localhost:3000/api/';

  constructor(private http:HttpClient) { }

  radio(lugar:any){

    return this.http.post<string[]>(this.API_URL +'radio', lugar); //definimos que devuelve un array de strings

  }
distancia(datos:any){
  return this.http.post(this.API_URL+'distancia',datos)
}

}
