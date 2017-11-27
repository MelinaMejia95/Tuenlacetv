import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class ZonaServicio{
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getZonas(){
       return this._http.get('http://localhost:3000/zones').map(response =>{ 
            console.log(response.json().data);
           return response.json().data;
    })}

    buscarZona(prueba:string) {
        console.log('Esta es la prueba:' + prueba)
        return this._http.get('http://localhost:3000/zones/'+ prueba).map(response =>{ 
            console.log(response.json());
           return response.json().data;
    })
    }

}