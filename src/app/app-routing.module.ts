import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZonasComponent } from './zonas/zonas.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { BarriosComponent } from './barrios/barrios.component';
import { TarifasComponent } from './tarifas/tarifas.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'zonas', component: ZonasComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'barrios', component: BarriosComponent},
  { path: 'tarifas', component: TarifasComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
