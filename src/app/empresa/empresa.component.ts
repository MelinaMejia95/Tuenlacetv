import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery('select').material_select(); 
    jQuery('.modal').modal();
  }

}
