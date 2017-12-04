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
  cod_zona: string
  zonas:string
  conceptos: string
  conceptot: string
  plans: string
  plan: string
  estadoEdit: string
  estado: string
  tarifaEdit: any;
  usuario: any

  constructor(private _tarifaservicio: TarifaServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._tarifaservicio.getTarifa().subscribe(data => {
      this.tarifas = data.rates;
      this.zonas = data.zones;
      this.conceptos = data.concepts;
      this.plans = data.plans;
      setTimeout(() => this.inicializarTarifas(), 1000);
    });
    this.inicializarSelect();
    jQuery('.modal').modal();
    jQuery('.dropdown-button').dropdown("open");
  }

  inicializarTarifas(){
    jQuery('#select2').material_select();
    jQuery('#select2').on('change', () => {
      this.cod_zona = jQuery('#select2').val();
    });
    jQuery('#select3').material_select();
    jQuery('#select3').on('change', () => {
      this.conceptot = jQuery('#select3').val();
    });
    jQuery('#select4').material_select();
    jQuery('#select4').on('change', () => {
      this.plan = jQuery('#select4').val();
    });
  }

  inicializarSelect() {
    jQuery('#select5').material_select();
    jQuery('#select5').on('change', () => {
      this.estado = jQuery('#select5').val();
    });
    jQuery('#select6').material_select();
    jQuery('#select6').on('change', () => {
      this.estadoEdit = jQuery('#select6').val();
    });
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  capture(option: string) {
    this.campo = option;
  }


  buscar() {
    this._tarifaservicio.buscarTarifa(this.campo, this.prueba).subscribe(data => {
      this.tarifas = data;
    });
  }

  datoSeleccionado(tarifa) {
    this.tarifaEdit = tarifa;
  }

  crearTarifa(valor) {
    if (valor) {
      this._tarifaservicio.crearTarifa({
        'zone_id': this.cod_zona,
        'concept_id': this.conceptot, 'plan_id': this.plan, 'valor': valor,
        'estado': this.estado, 'usuario': localStorage.getItem('usuario')
      }).subscribe(
        data => {
          console.log(data);
        });
    }
  }

  actualizarTarifa() {
    if (this.tarifaEdit) {
      this.tarifaEdit['estado'] = this.estadoEdit;
      this.tarifaEdit['usuario'] = localStorage.getItem('usuario');
      console.log(this.tarifaEdit);
      this._tarifaservicio.actualizarTarifa(this.tarifaEdit).subscribe(
        data => {
          console.log(data);
        });
    };

  }

  deleteTarifa(){
    if (this.tarifaEdit) {
      console.log(this.tarifaEdit.id)
      this._tarifaservicio.eliminarTarifa(this.tarifaEdit.id).subscribe(
        data => {
          console.log(data);
      });
    }; 
  }

}




