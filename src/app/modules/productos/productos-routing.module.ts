import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufandasComponent } from './pages/bufandas/bufandas.component';
import { PanuelosComponent } from './pages/panuelos/panuelos.component';
import { GuantesComponent } from './pages/guantes/guantes.component';
import { GorrosComponent } from './pages/gorros/gorros.component';

//rutas para las categorias
const routes: Routes = [
  {
    path:"bufandas", component:BufandasComponent
  },
  {
    path:"pañuelos", component:PanuelosComponent
  },
  {
    path:"guantes", component:GuantesComponent
  },
  {path:"gorros", component:GorrosComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
