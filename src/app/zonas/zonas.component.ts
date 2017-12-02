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
  zonaEdit: any;
  usuario:any
  campos = [{ key: 'codigo', name: 'Codigo' }, { key: 'nombre', name: 'Nombre' }]

  constructor(private _zonaservicio: ZonaServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._zonaservicio.getZonas().subscribe(data => {
      this.zonas = data;
    });
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

  actualizarZona(){
    if (this.zonaEdit) {
      this.zonaEdit['usuario'] = localStorage.getItem('usuario');
      console.log(this.zonaEdit);
      this._zonaservicio.actualizarZonas(this.zonaEdit).subscribe(
        data => {
          console.log(data);
      });
    };
  }

  datoSeleccionado(zona) {
    this.zonaEdit = zona;
  }

  deleteZone(){
    if (this.zonaEdit) {
      console.log(this.zonaEdit);
      this._zonaservicio.eliminarZonas(this.zonaEdit.id).subscribe(
        data => {
          console.log(data);
      });
    }; 
  }

}
