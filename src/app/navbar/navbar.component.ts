import { Component, OnInit } from '@angular/core';

declare let jQuery: any; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario: string;

  constructor() { }

  ngOnInit() {
    jQuery(".button-collapse").sideNav();
    jQuery(".collapsible").collapsible();
    jQuery(".dropdown-button").dropdown("open");
    this.usuario = localStorage.getItem('usuario');
  }
 
}
