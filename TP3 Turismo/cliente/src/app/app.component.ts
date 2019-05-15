import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';

//sweetalert2
import Swal from 'sweetalert2';

//SERVICIOS
import { GeoService } from './services/geo.service';
import { log } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //uader:any ={lat: -32.479240,lon: -58.233421}; //any para poder agregarle un campo

  ubicacionPersonalizada: any={};

  noElegioPersonalizada=true;

  listaRubros=['cervecerias', 'farmacias', 'universidades','centro de emergencias','supermercados'];

  radiosPorRubro= [];

  @ViewChild('lat') lat: ElementRef; //del #lat del html(trae el input) y lo asigna a lat(variable)

  @ViewChild('lon') lon: ElementRef;

  constructor(private _geo:GeoService){

  }

  ngOnInit() {
    
    this.ubicacionPersonalizada = {lat: -32.479240,lon: -58.233421};
    this.getRadios(this.ubicacionPersonalizada);
     //console.log(this.radiosPorRubro);
  }

  uaderUbicacion(){
    this.noElegioPersonalizada=true;
    this.ubicacionPersonalizada = {lat: -32.479240,lon: -58.233421};
    this.getRadios(this.ubicacionPersonalizada);
  }

  getPersonalizada(){

    
    this.ubicacionPersonalizada.lat=this.lat.nativeElement.value;
    this.ubicacionPersonalizada.lon=this.lon.nativeElement.value;
    console.log('lat: '+this.lat.nativeElement.value);
    console.log('lon: '+this.lon.nativeElement.value);
    
    this.getRadios(this.ubicacionPersonalizada);
  }

  getCalcularDistancia(lugar:any){
    
    var aux:any={};

    aux.lat= this.ubicacionPersonalizada.lat;
    aux.lon= this.ubicacionPersonalizada.lon;
    aux.lugar=lugar.lugar;
    aux.rubro=lugar.rubro;
    
    this._geo.distancia(aux).subscribe(res =>{
      console.log(res);

      Swal.fire({

        title: '',
        html: 'Distancia entre tu ubicación y '+aux.lugar+' es: <br>'+res.toString()+' km.',

        type: 'info',
        confirmButtonText: 'Aceptar'

      });
      
    });

  }

  getRadios(miUbicacion:any){

    this.radiosPorRubro=[];

    

    for (let i = 0; i < this.listaRubros.length; i++) {
      miUbicacion.rubro=this.listaRubros[i];

      this._geo.radio(miUbicacion).subscribe(res=>{
        if (res!=null) {
          for (let j = 0; j < res.length; j++) {
            var jason:any={};
  
            jason.lugar=res[j];
  
            jason.rubro= this.getRubro(res[j]);
            
  
            this.radiosPorRubro.push(jason);
          
          }
          
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: 'Debe ingresar Latitud y Longitud',
            type: 'error'
          });
        } 
        
      });
      
    }
  }

  getRubro(lugar:string){

    const palabra= lugar.split(" ")[0];
    

    switch (palabra) {

      case 'Cervecería':
        return 'cervecerias' 


      case 'Farmacia':
        return 'farmacias';

      case 'Universidad':
        return 'universidades';
      

      case 'Supermercado':
        return 'supermercados'; 
    
      default:
        return 'centro de emergencias';
    }

  }

}
