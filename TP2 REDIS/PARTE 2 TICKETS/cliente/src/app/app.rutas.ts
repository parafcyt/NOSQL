import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//COMPONENTES
import { DisponiblesComponent} from './components/disponibles/disponibles.component';
import { ReservadosComponent } from './components/reservados/reservados.component';
import { CompradosComponent } from './components/comprados/comprados.component';




const routes: Routes = [
    { path: 'disponibles', component: DisponiblesComponent },
    { path: 'reservados', component: ReservadosComponent },
    { path: 'comprados', component: CompradosComponent },
    { path: '**', component: DisponiblesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
