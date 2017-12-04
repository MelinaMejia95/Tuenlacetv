import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (
)

export class BarriosServicio{
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
getBarrios() {
        const url = `http://192.168.1.54:3000/neighborhoods`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarBarrios(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://192.168.1.54:3000/neighborhoods/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }

    crearBarrios(contenido: object) {
        const url = `http://192.168.1.54:3000/neighborhoods`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarBarrios(contenido: object) {
        const url = 'http://192.168.1.54:3000/neighborhoods/' + contenido['id'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarBarrios(codigo: string){
        const url = 'http://192.168.1.54:3000/neighborhoods/' + codigo;
        console.log(codigo);
        return this._http.delete(url).map(response => response.json());
    }

 
}