import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (
)

export class BarriosServicio{
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getBarrios(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://10.100.254.93:3000/neighborhoods/${campoUrl}`;
        return this._http.get(url).map(response =>{
            console.log(response.json().data);
            return response.json().data || response.json();
        })
    }
}