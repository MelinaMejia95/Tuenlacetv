import { Component, OnInit } from '@angular/core';

declare let jQuery: any;


@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('select').material_select(); 
    jQuery('.modal').modal();
  }

}
