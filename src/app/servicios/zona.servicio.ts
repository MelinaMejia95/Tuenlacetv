import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class ZonaServicio{
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getZonas() {
        const url = `http://localhost:3000/zones`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarZonas(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://localhost:3000/zones/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }
    

    crearZonas(contenido: object) {
        const url = `http://localhost:3000/zones`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarZonas(contenido: object) {
        const url = 'http://localhost:3000/zones/' + contenido['id'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarZonas(codigo: string){
        const url = 'http://localhost:3000/zones/' + codigo;
        console.log(codigo);
        return this._http.delete(url).map(response => response.json());
    }

}