import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-suscriptores',
  templateUrl: './suscriptores.component.html',
  styleUrls: ['./suscriptores.component.css']
})
export class SuscriptoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery('select').material_select(); 
    jQuery('.modal').modal();
    
  }

}