import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   Personnames :string[]=["SREEVANI","KRITHIKA","PRIYANKA","PRATHYUSHA","SIRISHA"]
  constructor() { }
  
  ngOnInit() {

  }

}
