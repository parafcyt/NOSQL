import { Component, OnInit } from '@angular/core';
import { CryptoService } from './services/crypto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  monedas;

  constructor ( private _crypto:CryptoService){}

  ngOnInit(){
    this.actualizar();
  
  }

  actualizar(){
    this._crypto.getCrypto().subscribe(res=>{
      this.monedas=res;
      console.log(res);
      
      
    });
  }
}
