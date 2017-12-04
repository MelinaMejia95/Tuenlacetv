import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class UsuarioServicio{
    
    constructor(private _http:Http){
        console.log("Servicio listo")
     }
    
    getUsuario(usuario) {
        const url = `http://localhost:3000/users`;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }

    buscarUsuario(campo?:string, valor?:string) {
        let campoUrl = '';
        if (campo && valor) {
            campoUrl = `${campo}/${valor}`;
        }
        const url = `http://localhost:3000/users/${campoUrl}`;
        return this._http.get(url).map(response =>{
            return response.json().data || response.json();
        })
    }
    

    crearUsuario(contenido: object) {
        const url = `http://localhost:3000/users`;
        console.log(contenido);
        return this._http.post(url, contenido).map(response => response.json());
    }

    actualizarUsuario(contenido: object) {
        const url = 'http://localhost:3000/users/' + contenido['id'];
        console.log(contenido);
        return this._http.put(url, contenido).map(response => response.json());
    }

    eliminarUsuario(codigo: string){
        const url = 'http://localhost:3000/users/' + codigo;
        console.log(codigo);
        return this._http.delete(url).map(response => response.json());
    }

}