import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantalonesComponent } from './pages/pantalones/pantalones.component'
import { CamperasComponent } from './pages/camperas/camperas.component'
import { GuantesComponent } from './pages/guantes/guantes.component';
import { GorrosComponent } from './pages/gorros/gorros.component';
import { BotasComponent } from './pages/botas/botas.component';
import { AntiparrasComponent } from './pages/antiparras/antiparras.component';
import { ContactComponent } from '../shared/pages/contact/contact.component';
import { GuiatallesComponent } from '../shared/pages/guiatalles/guiatalles.component';
import { SobrenosotrosComponent } from '../shared/pages/sobrenosotros/sobrenosotros.component';
//rutas para las categorias
const routes: Routes = [

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

  {
    path: "contacto", component: ContactComponent
  },
  { path: "guiadetalles", component: GuiatallesComponent },
  { path: "sobrenosotros", component: SobrenosotrosComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
