import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare let jQuery: any;

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit, AfterViewInit {

  public usuario: string;

  constructor(private router: Router) { }

  ngOnInit() {
    jQuery(".button-collapse").sideNav();
    this.usuario = localStorage.getItem('usuario');
  }

  ngAfterViewInit() {
    jQuery("#dropdown1").dropdown();
  }

  cerrar(){
    localStorage.clear();
    jQuery('body').css('padding-left', '0');
    this.router.navigate(['']);
  }

}
