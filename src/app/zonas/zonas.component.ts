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
    this.inicializarSelect();
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
  }

  inicializarSelect() {
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  buscar() {
    console.log(this.campo, this.prueba);
    this._zonaservicio.buscarZonas(this.campo, this.prueba).subscribe(data => {
      this.zonas = data;
    });

  }

  crearZona(nombre) {
    if (nombre) {
      this._zonaservicio.crearZonas({'nombre': nombre, 'usuario': localStorage.getItem('usuario')}).subscribe(
        data => {
          console.log(data);
      });
    }
  }

}
