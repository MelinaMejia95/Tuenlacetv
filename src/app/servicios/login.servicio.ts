import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable (

)
export class LoginServicio{
    constructor(private _http:Http){
        console.log("Servicio listo")
     }

     login(user, clave) {
        const url = `http://192.168.1.54:3000/users/login/`+user+'/'+clave;
        return this._http.get(url).map(response =>{
            return response.json();
        })
    }
}   