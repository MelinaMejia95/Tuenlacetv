import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../servicios/usuarios.servicio';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare let jQuery: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

usuarios:any[] = []
prueba:string
campo:string
usuarioEdit:any
usuario:any

  constructor(private _usuarioservicio: UsuarioServicio) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
    this._usuarioservicio.getUsuario(this.usuario).subscribe(data => {
      this.usuarios = data;
    });
    jQuery('select').material_select(); 
    jQuery('.modal').modal();
    this.inicializarSelect();
  }

  inicializarSelect(){
    jQuery('#select-filtro').material_select();
    jQuery('#select-filtro').on('change', () => {
      this.campo = jQuery('#select-filtro').val();
    });
    jQuery('#select6').material_select();
    jQuery('#select6').on('change', () => {
      this.campo = jQuery('#select6').val();
    });
  }

  datoSeleccionado(user) {
    this.usuarioEdit = user;
  }

  buscar(){
    this._usuarioservicio.buscarUsuario(this.campo, this.prueba).subscribe(data => {
      this.usuarios = data;
    });
  }

  crearUsuario(login, nombre, clave, nivel) {
    if (login) {
      this._usuarioservicio.crearUsuario({
        'login': login,
        'nombre': nombre, 'clave': clave, 'nivel': nivel,
       'usuario': localStorage.getItem('usuario')
      }).subscribe(
        data => {
          console.log(data);
        });
    }
  }

  actualizarUsuario(nivel) {
    if (this.usuarioEdit) {
      this.usuarioEdit['nivel'] = nivel;
      this.usuarioEdit['usuario'] = localStorage.getItem('usuario');
      console.log(this.usuarioEdit);
      this._usuarioservicio.actualizarUsuario(this.usuarioEdit).subscribe(
        data => {
          console.log(data);
        });
    };

  }

  deleteUsuario(){
    if (this.usuarioEdit) {
      console.log(this.usuarioEdit.id)
      this._usuarioservicio.eliminarUsuario(this.usuarioEdit.id).subscribe(
        data => {
          console.log(data);
      });
    }; 
  }

}
