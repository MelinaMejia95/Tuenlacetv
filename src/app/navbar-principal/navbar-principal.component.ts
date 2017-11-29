import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery(".button-collapse").sideNav();
    jQuery(".collapsible").collapsible();
    jQuery(".dropdown-button").dropdown("open");
    
  }

}
