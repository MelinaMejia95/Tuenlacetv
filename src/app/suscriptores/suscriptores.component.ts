import { Component, OnInit } from '@angular/core';
import { SuscriptorServicio } from '../servicios/suscriptores.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


declare let jQuery: any;

@Component({
  selector: 'app-suscriptores',
  templateUrl: './suscriptores.component.html',
  styleUrls: ['./suscriptores.component.css']
})
export class SuscriptoresComponent implements OnInit {

  suscriptores: any[] = []
  campo: string
  zonas: string
  barrios: string
  barrio: string
  entidad: string
  vivienda: string
  estrato2: string
  documento: string
  inst: string
  zona: string
  tarifas: string
  estrato: string
  tec: string
  instalacion: string
  persona1: string
  estado: string
  servicio: string
  documento2: string
  tarifa: string
  tecnologias: string
  entidad1: string
  persona: string
  prueba: string
  usuario: string
  barrio2: string
  zona2: string
  area: string
  barrioEdit: any
  entidad_id: string
  susEdit: any
  susAct: any[] = []
  documentos: string

  constructor(private _suscriptorservicio: SuscriptorServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._suscriptorservicio.getSuscriptor().subscribe(data => {
      this.suscriptores = data.signals;
      this.barrios = data.neighborhoods;
      this.tarifas = data.rates;
      this.zonas = data.zones;
      this.instalacion = data.type_installations;
      this.tecnologias = data.technologys;
      this.documentos = data.type_documents
      setTimeout(() => this.inicializarSuscriptores(), 1000);
    });
    this.inicializarSelect();
    jQuery('select').material_select();
    jQuery('.modal').modal();
    jQuery('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false,// Close upon selecting a date,
      format: 'dd-mm-yyyy'
    });

  }

  inicializarSuscriptores() {
    jQuery('#select1').material_select();
    jQuery('#select1').on('change', () => {
      this.entidad = jQuery('#select1').val();
    });
    jQuery('#select17').material_select();
    jQuery('#select17').on('change', () => {
      this.entidad1 = jQuery('#select17').val();
    });
    jQuery('#select2').material_select();
    jQuery('#select2').on('change', () => {
      this.documento = jQuery('#select2').val();
    });
    jQuery('#select3').material_select();
    jQuery('#select3').on('change', () => {
      this.barrio = jQuery('#select3').val();
    });
    jQuery('#select4').material_select();
    jQuery('#select4').on('change', () => {
      this.zona = jQuery('#select4').val();
    });
    jQuery('#select20').material_select();
    jQuery('#select20').on('change', () => {
      this.zona2 = jQuery('#select20').val();
    });
    jQuery('#select5').material_select();
    jQuery('#select5').on('change', () => {
      this.persona = jQuery('#select5').val();
    });
    jQuery('#select21').material_select();
    jQuery('#select21').on('change', () => {
      this.persona1 = jQuery('#select21').val();
    });
    jQuery('#select6').material_select();
    jQuery('#select6').on('change', () => {
      this.estrato = jQuery('#select6').val();
    });
    jQuery('#select22').material_select();
    jQuery('#select22').on('change', () => {
      this.estrato2 = jQuery('#select22').val();
    });
    jQuery('#select14').material_select();
    jQuery('#select14').on('change', () => {
      this.tec = jQuery('#select14').val();
    });
    jQuery('#select13').material_select();
    jQuery('#select13').on('change', () => {
      this.inst = jQuery('#select13').val();
    });
    jQuery('#select12').material_select();
    jQuery('#select12').on('change', () => {
      this.tarifa = jQuery('#select12').val();
    });
    jQuery('#select10').material_select();
    jQuery('#select10').on('change', () => {
      this.zona = jQuery('#select10').val();
    });
    jQuery('#select9').material_select();
    jQuery('#select9').on('change', () => {
      this.barrio = jQuery('#select9').val();
    });
    jQuery('#select19').material_select();
    jQuery('#select19').on('change', () => {
      this.barrio2 = jQuery('#select19').val();
    });
    jQuery('#select7').material_select();
    jQuery('#select7').on('change', () => {
      this.estrato = jQuery('#select7').val();
    });
    jQuery('#select8').material_select();
    jQuery('#select8').on('change', () => {
      this.vivienda = jQuery('#select8').val();
    });
    jQuery('#select11').material_select();
    jQuery('#select11').on('change', () => {
      this.estado = jQuery('#select11').val();
    });
    jQuery('#select15').material_select();
    jQuery('#select15').on('change', () => {
      this.servicio = jQuery('#select15').val();
    });
    jQuery('#select16').material_select();
    jQuery('#select16').on('change', () => {
      this.area = jQuery('#select16').val();
    });
    jQuery('#select18').material_select();
    jQuery('#select18').on('change', () => {
      this.documento2 = jQuery('#select18').val();
    });
  }

  inicializarSelect() {
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
  }

  capture(option: string) {
    this.campo = option;
  }

  datoSeleccionado(suscriptor) {
    console.log(suscriptor);
    this.susEdit = suscriptor;
  }


  buscar() {
    console.log(this.campo, this.prueba);
    this._suscriptorservicio.buscarSuscriptor(this.campo, this.prueba).subscribe(data => {
      this.suscriptores = data;
    });

  }

  guardarPersona(entidad, nit, nombre1, nombre2, apellido1, apellido2, dir, tel1, tel2, correo, fechanac, persona, estrato) {
    console.log(estrato, dir, persona)
    if (nit) {
      this._suscriptorservicio.crearSuscriptor({
        'funcion': entidad, 'type_document_id': this.documento, 'documento': nit,
        'nombre1': nombre1, 'nombre2': nombre2, 'apellido1': apellido1, 'apellido2': apellido2,
        'direccion': dir, 'neighborhood_id': this.barrio, 'zone_id': this.zona,
        'telefono1': tel1, 'telefono2': tel2, 'correo': correo, 'fechanac': fechanac,
        'tipopersona': persona, 'estrato': estrato, 'usuario': localStorage.getItem('usuario')
      }).subscribe(
        data => {
          console.log(data[0]);
          localStorage.setItem('entidad', data[0]['id']);
        });
    }
  }

  guardarSe(contrato, direccion, urb, torre, apto, estrato, vivienda, telcasa, telmovil, contacto, fechacon, num, estado, precinto, tiposerv, area) {
    console.log(localStorage.getItem('entidad'), contrato, direccion, urb, torre, apto, estrato, vivienda,
      telcasa, telmovil, contacto, this.barrio, this.zona, fechacon, num, estado, this.tarifa, precinto,
      this.inst, this.tec, this.servicio, this.area, localStorage.getItem('usuario'))
    if (contrato) {
      this._suscriptorservicio.crearSenal({
        'entity_id': localStorage.getItem('entidad'), 'contrato': contrato, 'direccion': direccion,
        'urbanizacion': urb, 'torre': torre, 'apto': apto, 'estrato': estrato,
        'vivienda': vivienda, 'telefono1': telcasa, 'telefono2': telmovil,
        'contacto': contacto, 'neighborhood_id': this.barrio, 'zone_id': this.zona, 'fechacontrato': fechacon,
        'numerotvs': num, 'estado': estado, 'rate_id': this.tarifa, 'precinto': precinto,
        'type_installation_id': this.inst, 'technology_id': this.tec, 'tiposervicio': this.servicio,
        'areainstalacion': this.area, 'usuario': localStorage.getItem('usuario')
      }).subscribe(
        data => {
          console.log(data);
        });
    }
  }

  deleteSus() {
    if (this.susEdit) {
      console.log(this.susEdit.codigo)
      console.log(this.susEdit.codigo_entidad)
      this._suscriptorservicio.eliminarSuscriptor(this.susEdit.codigo, this.susEdit.codigo_entidad).subscribe(
        data => {
          console.log(data);
        });
    };
  }

  actualizarSuscriptor(entidad, persona, estrato) {
    if (this.susEdit)
    this.susAct['codigo'] = this.susEdit['codigo_persona'];
    this.susAct['type_document_id'] = this.documento2;
    this.susAct['documento'] = this.susEdit['documento'];
    this.susAct['nombre1'] = this.susEdit['nombre1'];
    this.susAct['nombre2'] = this.susEdit['nombre2'];
    this.susAct['apellido1'] = this.susEdit['apellido1'];
    this.susAct['apellido2'] = this.susEdit['apellido2'];
    this.susAct['direccion'] = this.susEdit['direccionPersona'];
    this.susAct['neighborhood_id'] = this.barrio2;
    this.susAct['zone_id'] = this.zona2;
    this.susAct['telefono1'] = this.susEdit['telefono1Persona'];
    this.susAct['telefono2'] = this.susEdit['telefono2Persona'];
    this.susAct['correo'] = this.susEdit['correo'];
    this.susAct['fechanac'] = this.susEdit['fechanac'];
    this.susAct['tipopersona'] = this.persona1;
    this.susAct['estrato'] = this.estrato2;
    this.susAct['usuario'] = localStorage.getItem('usuario');
    console.log(this.susAct);
    this._suscriptorservicio.actualizarSuscriptor(this.susAct).subscribe(
      data => {
        console.log(data);
      });
  };


}
