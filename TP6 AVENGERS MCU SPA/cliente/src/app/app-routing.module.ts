import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'agregar', component: AgregarComponent},
  {path:'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
