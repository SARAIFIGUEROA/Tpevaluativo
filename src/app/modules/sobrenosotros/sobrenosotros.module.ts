import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { SobrenosotrosRoutingModule } from './sobrenosotros-routing.module';


@NgModule({
  declarations: [
    SobrenosotrosComponent,

  ],
  imports: [
    CommonModule,
    SobrenosotrosRoutingModule,
  ],


})
export class SobrenosotrosModule { }
