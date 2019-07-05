import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//SERVICIO
import { PeliculasService } from './servicios/peliculas.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { TarjetaEditarComponent } from './componentes/tarjeta-editar/tarjeta-editar.component';

//SWEETALERT
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TarjetaAgregarComponent } from './componentes/tarjeta-agregar/tarjeta-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    TarjetaComponent,
    EditarComponent,
    AgregarComponent,
    TarjetaEditarComponent,
    FormularioComponent,
    TarjetaAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
