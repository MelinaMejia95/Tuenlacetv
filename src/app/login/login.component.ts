import { Component, OnInit } from '@angular/core';
//import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css'
import { LoginServicio } from '../servicios/login.servicio';
import { Router } from '@angular/router';

declare let jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              ]
})
export class LoginComponent implements OnInit {

  public mensaje: string;

  constructor(private _loginservicio: LoginServicio, private route: Router) { }

  ngOnInit() {
    const usuarioExiste =  localStorage.getItem('usuario');
    if (usuarioExiste) {
      this.route.navigate(['/zonas']);
      jQuery('body').css('padding-left', '300px');
    }
  }

  conectar(nombreusuario, clave) {
    if (nombreusuario && clave){
      this._loginservicio.login(nombreusuario, clave).subscribe(data => {
        this.mensaje = data.message;
        if (this.mensaje == 'Success'){
          this.route.navigate(['/principal']);
          jQuery('body').css('padding-left', '300px');
          localStorage.setItem('usuario', nombreusuario);
        }else{
          console.log(this.mensaje);
        }
      });
    } else {
      this.mensaje = 'Completa todos los campos';
    }
  }

  message() {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      timer: null
    }).then(function() {
      swal(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
    }, function(dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}

