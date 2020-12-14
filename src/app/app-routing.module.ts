import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'productos', component: ProductosComponent},
  { path: 'categorias', component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
