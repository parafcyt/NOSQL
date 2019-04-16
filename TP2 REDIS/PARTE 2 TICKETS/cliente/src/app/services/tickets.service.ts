import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private _http: HttpClient) { }

  private URL='http://localhost:5000';

  listarDisponibles(){
    return this._http.get(this.URL+'/listar/disponibles'); //ruta del servidor
  }

  listarReservados(){
    return this._http.get(this.URL+'/listar/reservados');
  }

  listarComprados(){
    return this._http.get(this.URL+'/listar/comprados');
  }

  comprar(nroTicket:string){
    return this._http.get(this.URL+'/comprar/'+nroTicket);
  }

  reservar(nroTicket:string){
    return this._http.get(this.URL+'/reservar/'+nroTicket);
  }

}
