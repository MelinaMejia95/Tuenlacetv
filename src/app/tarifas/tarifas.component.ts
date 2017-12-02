import { Component, OnInit } from '@angular/core';
import { TarifaServicio } from '../servicios/tarifas.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare let jQuery: any;

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas: any[] = []
  prueba: string
  campo: string
  tarifaEdit: any;
  usuario: any

  constructor(private _tarifaservicio: TarifaServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._tarifaservicio.getTarifa().subscribe(data => {
      this.tarifas = data;
    });
    this.inicializarSelect();
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
  }

  inicializarSelect() {
    jQuery('#select2').material_select();
    jQuery('#select3').material_select();
    jQuery('#select4').material_select();
    jQuery('#select5').material_select();
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  buscar() {
    this._tarifaservicio.buscarTarifa(this.campo, this.prueba).subscribe(data => {
      this.tarifas = data;
    });
  }

  datoSeleccionado(barrio) {
    this.tarifaEdit = barrio;
  }

  crearTarifa(id, cod_zona, concepto, plan, valor, estado) {
    if (id) {
      this._tarifaservicio.crearTarifa({'id': id,'zone_id': cod_zona ,
      'concept_id': concepto, 'plan_id': plan, 'valor': valor,
      'estado': estado ,'usuario': localStorage.getItem('usuario')}).subscribe(
        data => {
          console.log(data);
      });
    }
  }

}




