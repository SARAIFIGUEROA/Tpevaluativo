import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

const routes: Routes = [
  {
    path: "", component: InicioComponent
  },
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "", loadChildren: () => import('./modules/productos/productos.module').then(m => m.ProductosModule)
  },
  { path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule) },
  {
    path: "", loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: "", loadChildren: () => import('./modules/admin/admin.module').then(m=>m.AdminModule),
    // Definimos al guardian que proteja la ruta de Admin y que espere un rol de tipo "admin"
    canActivate: [ rutaProtegidaGuard ], data: { role: 'admin' }

  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
