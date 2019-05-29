import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  API_URL='http://localhost:5000';

  constructor(private http:HttpClient) { }


  getCrypto(){
    return this.http.get(this.API_URL); //hago peticion GET a la URL

  }
}


