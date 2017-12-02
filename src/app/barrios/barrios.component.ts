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
  usuario:string
  barrioEdit: any
  campos = [{ key: 'codigo', name: 'Codigo' }, { key: 'nombre', name: 'Nombre' }]

  constructor(private _barrioservicio: BarriosServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._barrioservicio.getBarrios().subscribe(data => {
      this.barrios = data;
    });
    this.inicializarSelect();
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
  }

  inicializarSelect() {
    jQuery('#select2').material_select();
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  capture(option:string) {
    this.campo = option;
  }

buscar() {
    console.log(this.campo, this.prueba);
    this._barrioservicio.buscarBarrios(this.campo, this.prueba).subscribe(data => {
      this.barrios = data;
    });

  }

  crearBarrio(id, nombre) {
    if (nombre) {
      this._barrioservicio.crearBarrios({'zone_id' : id, 'nombre': nombre, 'usuario': localStorage.getItem('usuario')}).subscribe(
        data => {
          console.log(data);
      });
    }
  }

  actualizarBarrio(){
      if (this.barrioEdit) {
        this.barrioEdit['usuario'] = localStorage.getItem('usuario');
        console.log(this.barrioEdit);
        this._barrioservicio.actualizarBarrios(this.barrioEdit).subscribe(
          data => {
            console.log(data);
        });
      };
    
  }

  datoSeleccionado(barrio) {
    this.barrioEdit = barrio;
  }

  deleteBarrio() {
    if (this.barrioEdit) {
      console.log(this.barrioEdit);
      this._barrioservicio.eliminarBarrios(this.barrioEdit.id).subscribe(
        data => {
          console.log(data);
      });
    }; 
  }

}
