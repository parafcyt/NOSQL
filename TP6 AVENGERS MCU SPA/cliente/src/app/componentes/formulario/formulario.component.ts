import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//SERVICIO
import { PeliculasService } from '../../servicios/peliculas.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formGroup: FormGroup;

  pelicula;

  constructor(private formBuilder: FormBuilder, private peliculasService:PeliculasService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        fecha: '',
        recaudacion:'',
        pagina:'',
        descripcion:''
      }
    );

    //LLAMO AL SERVICIO PARA TRAER LA PELI
    this.peliculasService.traerPelixId(this.rutaActiva.snapshot.paramMap.get('id')).subscribe(res=>{
      this.pelicula=res;
      this.construirFormulario();
    });
    
  }

  construirFormulario(){
    this.formGroup.patchValue({
      fecha: this.pelicula.release_date,
      recaudacion: this.pelicula.revenue,
      pagina:this.pelicula.homepage,
      descripcion: this.pelicula.overview
    });
    

  }

  actualizarCambios(){

    console.log(this.formGroup.value);
    this.pelicula.release_date=this.formGroup.value.fecha;
    this.pelicula.revenue=this.formGroup.value.recaudacion;
    this.pelicula.homepage=this.formGroup.value.pagina;
    this.pelicula.overview=this.formGroup.value.descripcion;

    //LLAMO AL SERVICIO
    this.peliculasService.modificarPelicula(this.pelicula).subscribe(res=>{
      console.log(res);

      //QUE VUELVA A EDITAR
      this.router.navigateByUrl('/editar');
    });

    
  }

}
