import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZonasComponent } from './zonas/zonas.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { BarriosComponent } from './barrios/barrios.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'zonas', component: ZonasComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'barrios', component: BarriosComponent},
  { path: 'tarifas', component: TarifasComponent},
  { path: 'suscriptores', component: SuscriptoresComponent },
  { path: 'usuarios', component: UsuariosComponent},
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
