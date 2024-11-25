import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { GuiatallesComponent } from './pages/guiatalles/guiatalles.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    SobrenosotrosComponent,
    GuiatallesComponent,
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule, // Importa SharedModule para usar Navbar y Footer
  ],

})
export class PagesModule { }
