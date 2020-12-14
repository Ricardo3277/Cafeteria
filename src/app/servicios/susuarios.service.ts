import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class SusuariosService {
  url = 'https://equipo4-4d-2do-parcial-awos.herokuapp.com/usuario';

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}`).toPromise();
    }
  altaUsuario(usuario: UsuarioModel) {
    console.log(usuario);
    return this.http.post(`${this.url}`, usuario).toPromise();
  }
  eliminarUsuario(_id: string) {
    console.log(_id)
    return this.http.delete(`${this.url}/${_id}`).toPromise();
  }
  modificarUsuario(_id, updateUs){
    return this.http.put(`${this.url}/${_id}`, updateUs).toPromise();
  }
  seleccionar(_id: string){​​

    return this.http.get(`${this.url}/${_id}`).toPromise();

  }​​

}

 