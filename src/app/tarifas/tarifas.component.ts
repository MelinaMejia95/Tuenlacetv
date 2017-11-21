import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery('select').material_select(); 
    jQuery('.modal').modal();
  }

}
