import { Component, Input, OnInit } from '@angular/core';
import { SusuariosService } from '../../servicios/susuarios.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @Input() usuarios: any 

  constructor(private SusuariosService: SusuariosService) { }
  usuario: UsuarioModel = new UsuarioModel(); 
  usu: UsuarioModel = new UsuarioModel();
  cambio: boolean = false;
  ngOnInit() {
    this.obtenerUsuarios();
    
 
  }

  obtenerUsuarios() {
    this.SusuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
  }

  altaUsuario(){
    console.log(this.usuario); 
    this.SusuariosService.altaUsuario(this.usuario).then((data: any) =>{
      location.reload(true);
    }).catch((err) =>{
      //console.log(err);
        })
  }

  eliminarUsuario(_id: string){
    this.SusuariosService.eliminarUsuario(_id).then((data: any) =>{
      console.log(data);
      location.reload(true);
    }).catch((err) =>{
      console.log(err);
    })
  }

  modificarUsuario() {
    this.SusuariosService.modificarUsuario(this.usuario._id, this.usuario).then((data: any) => {
      location.reload(true);
    }).catch((err) => {

    })
  }
  seleccionar(idUsuario: string){​​
    this.SusuariosService.seleccionar(idUsuario).then((data: any) => {​​
    this.usuario = data.usuarios;
    this.cambio = true;
    }​​).catch((err) => {​​

    console.log(err);

    }​​);

  }​​

 
  

}
