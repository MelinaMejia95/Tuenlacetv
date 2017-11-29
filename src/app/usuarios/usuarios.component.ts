import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('select').material_select(); 
    jQuery('.modal').modal();
    
  }

}
