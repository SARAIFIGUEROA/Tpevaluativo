import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { GuiatallesComponent } from './pages/guiatalles/guiatalles.component';

@NgModule({
  declarations: [
    ContactComponent,
    SobrenosotrosComponent,
    GuiatallesComponent,
  ],

  imports: [
    RouterModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
