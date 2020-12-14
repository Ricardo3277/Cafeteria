import { Component, Input, OnInit } from '@angular/core';
import { ScategoriasService } from '../../servicios/scategorias.service';
import { HttpClient } from '@angular/common/http';
import { CategoriaModel } from '../../models/categoria';
import { NgForm } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Input() categorias: any;

  constructor(private ScategoriasService: ScategoriasService) { }
  categoria: CategoriaModel = new CategoriaModel;
  cambio: boolean=false; 
  _id: string;
  ngOnInit() {
    this.obtenerCategorias();
    
 
  }

  obtenerCategorias() {
    this.ScategoriasService.obtenerCategorias().then((data: any) =>{
      console.log(data.categorias);
      this.categorias=data.categorias;
    }).catch((err) =>{
      console.log(err);
    })
  }

  altaCategoria(){
    console.log(this.categoria); 
    this.ScategoriasService.altaCategoria(this.categoria).then((data: any) =>{
      location.reload(true);
    }).catch((err) =>{
      //console.log(err);
        })
  }

  eliminarCategoria(_id: string){
    this.ScategoriasService.eliminarCategoria(_id).then((data: any) =>{
      console.log(data);
      location.reload(true);
    }).catch((err) =>{
      console.log(err);
    })
  }

  modificarCategoria() {
    this.ScategoriasService.modificarCategoria(this.categoria._id, this.categoria).then((data: any) => {
      location.reload(true);
    }).catch((err) => {

    })
  }
  seleccionCategoria(_id: string){​​
    this.ScategoriasService.seleccionCategoria(_id).then((data: any) => {​​
    this.categoria = data.categorias;
    this.cambio = true;
    }​​).catch((err) => {​​

    console.log(err);

    }​​);
  }
  regresar(){
    this.cambio = false;
  }
}
