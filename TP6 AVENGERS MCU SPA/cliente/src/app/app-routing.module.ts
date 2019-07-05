import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';




const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch:'full'}, //cuando entra direcciona a /inicio
  {path:'inicio', component: InicioComponent},
  {path:'agregar', component: AgregarComponent},
  {path:'editar', component: EditarComponent},
  {path:'formulario/:id', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
