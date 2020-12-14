import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class SproductosService {
  url = 'https://equipo4-4d-2do-parcial-awos.herokuapp.com/producto';

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get(`${this.url}`).toPromise();
    }
  altaProducto(producto: ProductoModel) {
    console.log(producto);
    return this.http.post(`${this.url}`, producto).toPromise();
  }
  eliminarProducto(_id: string) {
    console.log(_id)
    return this.http.delete(`${this.url}/${_id}`).toPromise();
  }
  modificarProducto(_id, updateUs){
    return this.http.put(`${this.url}/${_id}`, updateUs).toPromise();
  }
  seleccionar(_id: string){​​

    return this.http.get(`${this.url}/${_id}`).toPromise();

  }​​
}
