import { Component, OnInit } from '@angular/core';

//servicios
import { TicketsService } from '../../services/tickets.service';

//sweetAlert
import swal from 'sweetalert2';


@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.component.html',
  styleUrls: ['./reservados.component.css']
})
export class ReservadosComponent implements OnInit {

  reservados:any;

  constructor(private _ticketService:TicketsService) { }

  ngOnInit() {
    this.listarReservados();
  }

  listarReservados(){
    //llamo al servicio
    this._ticketService.listarReservados().subscribe(res=>{
      console.log(res);
      this.reservados=res;
    })

  }

  comprar(nroTicket:string){
    this._ticketService.comprar(nroTicket).subscribe(res=>{
      swal.fire('Comprado','# de Ticket '+nroTicket+'.','success');
      this.listarReservados();
    })

  }

}
