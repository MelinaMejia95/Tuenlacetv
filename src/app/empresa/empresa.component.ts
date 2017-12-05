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
  ciudad:string
  ciudad2:string
  empresaEdit:any
  usuario:any

  constructor(private _empresaservicio: EmpresaServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._empresaservicio.getEmpresa().subscribe(data => {
      this.empresas = data.companies;
      this.ciudades = data.cities;
      setTimeout(() => this.inicializarTarifas(), 1000);
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

  inicializarTarifas(){
    jQuery('#select2').material_select();
    jQuery('#select2').on('change', () => {
      this.ciudad = jQuery('#select2').val();
    });
    jQuery('#select3').material_select();
    jQuery('#select3').on('change', () => {
      this.ciudad2 = jQuery('#select3').val();
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

  crearEmpresa(nit, nombre, direccion, tel1,tel2, fax, contacto, correo, regimen, actividad, contribuyente, resolucion,representante) {
    if (nit) {
      this._empresaservicio.crearEmpresa({
        'nit': nit, 'nombre': nombre, 'direccion': direccion, 'telefono1': tel1, 'telefono2': tel2, 'fax': fax, 'contacto': contacto,
        'correo':correo, 'regimen': regimen, 'actividade': actividad, 'contribuyente': contribuyente, 'resolucionCntv': resolucion,
        'representante': representante, 'idciudad': this.ciudad, 'usuario': localStorage.getItem('usuario')
      }).subscribe(
        data => {
          console.log(data);
        });
    }
  }

  actualizarEmpresa(regimen, contribuyente) {
    if (this.empresaEdit) {
      this.empresaEdit['regimen'] = regimen;
      this.empresaEdit['contribuyente'] = contribuyente;
      this.empresaEdit['contribuyente'] = this.ciudad2;
      this.empresaEdit['usuario'] = localStorage.getItem('usuario');
      console.log(this.empresaEdit);
      this._empresaservicio.actualizarEmpresa(this.empresaEdit).subscribe(
        data => {
          console.log(data);
        });
    };

  }

  deleteEmpresa(){
    if (this.empresaEdit) {
      console.log(this.empresaEdit.id)
      this._empresaservicio.eliminarEmpresa(this.empresaEdit.id).subscribe(
        data => {
          console.log(data);
      });
    }; 
  }

}
