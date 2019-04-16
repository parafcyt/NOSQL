import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { RoutingModule } from './app.rutas';

//SERVICIOS
import { HttpClientModule } from '@angular/common/http';
import { TicketsService } from './services/tickets.service';


//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisponiblesComponent } from './components/disponibles/disponibles.component';
import { ReservadosComponent } from './components/reservados/reservados.component';
import { CompradosComponent } from './components/comprados/comprados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisponiblesComponent,
    ReservadosComponent,
    CompradosComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
