import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class EmpresaServicio{
    
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getEmpresa() {
        const url = `http://localhost:3000/companies`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarEmpresa(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://localhost:3000/companies/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }
    

    crearEmpresa(contenido: object) {
        const url = `http://localhost:3000/companies`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarEmpresa(contenido: object) {
        const url = 'http://localhost:3000/companies/' + contenido['id'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarEmpresa(codigo: string){
        const url = 'http://localhost:3000/companies/' + codigo;
        console.log(codigo);
        return this._http.delete(url).map(response => response.json());
    }

}