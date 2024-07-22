import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './componentes/card/card.component';
//importaciones de angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    //importaciones de angular material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports:[
    InicioComponent,
  ]
})
export class InicioModule { }
