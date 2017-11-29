import { Component, OnInit } from '@angular/core';
import { BarriosServicio } from '../servicios/barrios.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare let jQuery: any;

@Component({
  selector: 'app-barrios',
  templateUrl: './barrios.component.html',
  styleUrls: ['./barrios.component.css']
})
export class BarriosComponent implements OnInit {

  barrios: any[] = []
  campo:string
  prueba: string
  campos = [{ key: 'codigo', name: 'Codigo' }, { key: 'nombre', name: 'Nombre' }]

  constructor(private _barrioservicio: BarriosServicio) { }

  ngOnInit() {

    this._barrioservicio.getBarrios().subscribe(data => {
      this.barrios = data;
    });
    jQuery('select').material_select(); 
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
    jQuery('#myselect').on('change', () => { 
      this.campo
    });
    
  }

  capture(option:string) {
    this.campo = option;
  }

  buscar() {
    console.log(this.campo);
    this._barrioservicio.getBarrios(this.campo, this.prueba).subscribe(data => {
      this.barrios = data;
      console.log(data);
    });

  }

}
