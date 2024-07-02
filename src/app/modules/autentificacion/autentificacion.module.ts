import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//loguin
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
FormsModule
  ],
  exports:[
    RegistroComponent,
    IniciosesionComponent,
    FormsModule
  ]
})
export class AutentificacionModule { }
