import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class SuscriptorServicio{
    
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getSuscriptor() {
        const url = `http://localhost:3000/signal_tvs`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarSuscriptor(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://localhost:3000/signal_tvs/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }
    

    crearSenal(contenido: object) {
        const url = `http://localhost:3000/signal_tvs`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    crearSuscriptor(contenido: object) {
        const url = `http://localhost:3000/people`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarSuscriptor(contenido: object) {
        const url = 'http://localhost:3000/people/' + contenido['codigo'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarSuscriptor(codigo: string, identidad:string){
        const url = 'http://localhost:3000/signal_tvs/' + codigo + '?identidad='+identidad;
        //console.log(codigo,identidad);
        return this._http.delete(url).map(response => response.json());
    }

}