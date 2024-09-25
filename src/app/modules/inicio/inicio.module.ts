import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './componentes/card/card.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CategoriashomeComponent } from './componentes/categoriashome/categoriashome.component';
//importaciones de angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent,
    CategoriashomeComponent,

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    //importaciones de angular material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  exports: [
    InicioComponent,
    CardComponent,
    CategoriashomeComponent,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,

  ]
})
export class InicioModule { }
