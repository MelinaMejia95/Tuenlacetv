import { Component, OnInit } from '@angular/core';
import { EmpresaServicio } from '../servicios/empresas.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare let jQuery: any;

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas:any[] = []
  prueba:string
  campo:string
  ciudades:string
  empresaEdit:any
  usuario:any

  constructor(private _empresaservicio: EmpresaServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._empresaservicio.getEmpresa().subscribe(data => {
      this.empresas = data.companies;
      this.ciudades = data.cities;
      //setTimeout(() => this.inicializarTarifas(), 1000);
    });
    this.inicializarSelect();
    jQuery('select').material_select(); 
    jQuery('.modal').modal();
  }

  inicializarSelect() {
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  buscar() {
    this._empresaservicio.buscarEmpresa(this.campo, this.prueba).subscribe(data => {
      this.empresas = data;
    });
  }

  datoSeleccionado(empr) {
    this.empresaEdit = empr;
  }

}
