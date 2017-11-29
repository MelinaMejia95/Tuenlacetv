import { Component, OnInit } from '@angular/core';
import { ZonaServicio } from '../servicios/zona.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare let jQuery: any;


@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  zonas: any[] = []
  prueba: string
  campo:string
  campos = [{ key: 'codigo', name: 'Codigo' }, { key: 'nombre', name: 'Nombre' }]

  constructor(private _zonaservicio: ZonaServicio) { }

  ngOnInit() {
    this._zonaservicio.getZonas().subscribe(data => {
      this.zonas = data;
      //console.log(this.zonas[0]);

    });
    /*this._zonaservicio.buscarZona().subscribe(data => {
      this.zonas = data;
       
    });*/
    jQuery('select').material_select();
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
  }

  capture(option:string) {
    this.campo = option;
  }

  buscar() {
    console.log(this.campo);
    this._zonaservicio.getZonas(this.campo, this.prueba).subscribe(data => {
      this.zonas = data;
      console.log(data);
    });

  }

}
