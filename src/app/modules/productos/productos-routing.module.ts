import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantalonesComponent } from './pages/pantalones/pantalones.component'
import { CamperasComponent } from './pages/camperas/camperas.component'
import { GuantesComponent } from './pages/guantes/guantes.component';
import { GorrosComponent } from './pages/gorros/gorros.component';
import { BotasComponent } from './pages/botas/botas.component';
import { AntiparrasComponent } from './pages/antiparras/antiparras.component';
import { ProductoComponent } from './pages/producto/producto.component';
//

//rutas para las categorias
const routes: Routes = [
  {
    path: "producto", component: ProductoComponent
  },
  {
    path: "camperas", component: CamperasComponent
  },
  {
    path: "pantalones", component: PantalonesComponent
  },
  { path: "antiparras", component: AntiparrasComponent },
  {
    path: "guantes", component: GuantesComponent
  },
  { path: "gorros", component: GorrosComponent },

  { path: "botas", component: BotasComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
