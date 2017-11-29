import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import swal from 'sweetalert2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZonasComponent } from './zonas/zonas.component';
import { AppRoutingModule } from './/app-routing.module';
import { BarriosComponent } from './barrios/barrios.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormsModule } from '@angular/forms';
import { ZonaServicio } from './servicios/zona.servicio';
import { LoginServicio } from './servicios/login.servicio';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    NavbarComponent,
    ZonasComponent,
    BarriosComponent,
    TarifasComponent,
    SuscriptoresComponent,
    NavbarPrincipalComponent,
    UsuariosComponent,
    EmpresaComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-lg btn-primary',
      cancelButtonClass: 'btn btn-lg'
  }),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ZonaServicio, LoginServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
