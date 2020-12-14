import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ScategoriasService {
  url = 'https://equipo4-4d-2do-parcial-awos.herokuapp.com/categoria';

  constructor(private http: HttpClient) { }

  obtenerCategorias() {
    return this.http.get(`${this.url}`).toPromise();
    }
  altaCategoria(categoria: CategoriaModel) {
    console.log(categoria);
    return this.http.post(`${this.url}`, categoria).toPromise();
    
  }
  eliminarCategoria(_id: string) {
    console.log(_id)
    return this.http.delete(`${this.url}/${_id}`).toPromise();
  }
  modificarCategoria(_id, updateUs){
    return this.http.put(`${this.url}/${_id}`, updateUs).toPromise();
  }
  seleccionCategoria(_id: string){​​
    return this.http.get(`${this.url}/${_id}`).toPromise();

  }​​
  regresar(){
    
  }

}