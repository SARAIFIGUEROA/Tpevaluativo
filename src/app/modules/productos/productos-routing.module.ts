import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantalonesComponent} from './pages/pantalones/pantalones.component'
import { CamperasComponent } from './pages/camperas/camperas.component'
import { GuantesComponent } from './pages/guantes/guantes.component';
import { GorrosComponent } from './pages/gorros/gorros.component';
import { BotasComponent } from './pages/botas/botas.component';
import { AntiparrasComponent } from './pages/antiparras/antiparras.component';
//rutas para las categorias
const routes: Routes = [
  {
    path:"pantalones", component:PantalonesComponent
  },
  {
    path:"camperas", component:CamperasComponent
  },
  {
    path:"guantes", component:GuantesComponent
  },
  {path:"gorros", component:GorrosComponent},
  {path:"botas", component:BotasComponent},
  {path:"antiparras", component:AntiparrasComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
