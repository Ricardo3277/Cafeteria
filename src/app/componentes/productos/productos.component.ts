import { Component, Input, OnInit } from '@angular/core';
import { SproductosService } from '../../servicios/sproductos.service';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../../models/producto';
import { NgForm } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos: any;

  constructor(private SproductosService: SproductosService) { }
  producto: ProductoModel = new ProductoModel; 
  
  cambio: boolean = false;
  _id: string;
  ngOnInit() {
    this.obtenerProductos();
    
 
  }

  obtenerProductos() {
    this.SproductosService.obtenerProductos().then((data: any) =>{
      console.log(data.productos);
      this.productos=data.productos;
    }).catch((err) =>{
      console.log(err);
    })
  }
 
  altaProducto(){
    console.log(this.producto); 
    this.SproductosService.altaProducto(this.producto).then((data: any) =>{
      location.reload(true);
    }).catch((err) =>{
      //console.log(err);
        })
  }
  eliminarProducto(_id: string){
    this.SproductosService.eliminarProducto(_id).then((data: any) =>{
      console.log(data);
      location.reload(true);
    }).catch((err) =>{
      console.log(err);
    })
  }

  modificarProducto() {
    this.SproductosService.modificarProducto(this.producto._id, this.producto).then((data: any) => {
      location.reload(true);
    }).catch((err) => {

    })
  }
  seleccionar(idprod: string){​​
    this.SproductosService.seleccionar(idprod).then((data: any) => {​​
    this.producto = data.productos;
    this.cambio = true;
    }​​).catch((err) => {​​

    console.log(err);

    }​​);

  }​​

 
  

}

