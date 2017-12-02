import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

declare let jQuery: any;

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }

  ngOnInit() {
    // jQuery("#dropdown1").dropdown();
    jQuery(".button-collapse").sideNav();
    
  }

  ngOnChanges() {
    jQuery("#dropdown1").dropdown();
  }

  cerrar(){
    localStorage.clear();
    jQuery('body').css('padding-left', '0');
    this.router.navigate(['']);
  }

}
