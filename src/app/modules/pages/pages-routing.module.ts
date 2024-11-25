import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { GuiatallesComponent } from './pages/guiatalles/guiatalles.component';

const routes: Routes = [
  {path:'contacto', component:ContactComponent },
  {path:'sobrenosotros', component:SobrenosotrosComponent},
  {path:'guiadetalles', component: GuiatallesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
