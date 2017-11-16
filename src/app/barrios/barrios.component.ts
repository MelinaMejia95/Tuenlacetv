import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery('select').material_select(); 
    jQuery('.modal').modal();
    
  }

}
