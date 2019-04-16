import { Component, OnInit } from '@angular/core';

//servicios
import { TicketsService } from '../../services/tickets.service';


@Component({
  selector: 'app-comprados',
  templateUrl: './comprados.component.html',
  styleUrls: ['./comprados.component.css']
})
export class CompradosComponent implements OnInit {

  comprados:any;

  constructor(private _ticketService:TicketsService) { }

  ngOnInit() {
    this.listarComprados();
  }

  listarComprados(){
    this._ticketService.listarComprados().subscribe(res=>{
      console.log(res);
      this.comprados=res;
      
    })
  }

}
