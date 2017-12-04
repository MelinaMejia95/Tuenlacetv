import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class TarifaServicio{
    
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getTarifa() {
        const url = `http://localhost:3000/rates`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarTarifa(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://localhost:3000/rates/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }
    

    crearTarifa(contenido: object) {
        const url = `http://localhost:3000/rates`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarTarifa(contenido: object) {
        const url = 'http://localhost:3000/rates/' + contenido['id'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarTarifa(codigo: string){
        const url = 'http://localhost:3000/rates/' + codigo;
        console.log(codigo);
        return this._http.delete(url).map(response => response.json());
    }

}