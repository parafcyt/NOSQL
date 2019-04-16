import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';

//importo sweetalert
import swal from 'sweetalert2';



@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {

  disponibles: any;

  constructor(private _ticketService: TicketsService) { }

  ngOnInit() {

    this.listar();
  }

  listar(){
    this._ticketService.listarDisponibles().subscribe(res=>{
      console.log(res);
      this.disponibles=res;
      
    });
  }

  reservar(nroTicket:string){
    //llamo servicio
    this._ticketService.reservar(nroTicket).subscribe(res=>{
      console.log(res);
      swal.fire('Reservado',res.toString(),'success');
      this.listar();
    })
  }

  comprar(nroTicket:string){
    this._ticketService.comprar(nroTicket).subscribe(res=>{
      swal.fire('Comprado','# de Ticket '+nroTicket+'.','success');
      this.listar();
    })

  }

}
