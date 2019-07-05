import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

//IMPORTO EL SERVICIO
import { PeliculasService } from '../../servicios/peliculas.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public formGroup: FormGroup;

  peliculasTraidas;

  constructor(private peliculaServicio:PeliculasService, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        busqueda:''
      }
    );
  }

  buscar(){
    console.log(this.formGroup.value);
    this.peliculaServicio.consultaPeliculas(this.formGroup.value.busqueda).subscribe(res=>{
      console.log(res);
      this.peliculasTraidas=res;
      
    })
    
  }

}


