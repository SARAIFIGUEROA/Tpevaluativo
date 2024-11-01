import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AdminModule } from '../admin/admin.module';

//componentes de productos
import { CamperasComponent } from './pages/camperas/camperas.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { GorrosComponent } from './pages/gorros/gorros.component';
import { GuantesComponent } from './pages/guantes/guantes.component';
import { BotasComponent } from './pages/botas/botas.component';
import { AntiparrasComponent } from './pages/antiparras/antiparras.component';
//cards
import { CardComponent } from './components/card/card.component';
import { CardAntiparrasComponent } from './components/card-antiparras/card-antiparras.component';

import { CardCamperasComponent } from './components/card-camperas/card-camperas.component';
import { CardPantalonesComponent } from './components/card-pantalones/card-pantalones.component';
import { CardBotasComponent } from './components/card-botas/card-botas.component';
import { CardGuantesComponent } from './components/card-guantes/card-guantes.component';
import { CardGorrosComponent } from './components/card-gorros/card-gorros.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CamperasComponent,
    PantalonesComponent,
    GorrosComponent,
    GuantesComponent,
    AntiparrasComponent,
    BotasComponent,
    CardComponent,
    CardAntiparrasComponent,
    CardCamperasComponent,
    CardPantalonesComponent,
    CardBotasComponent,
    CardGuantesComponent,
    CardGorrosComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    AdminModule,
  ],
  exports: [
    ProductoComponent,
    CamperasComponent,
    PantalonesComponent,
    GorrosComponent,
    GuantesComponent,
    AntiparrasComponent,
    BotasComponent,
    CardComponent,
    CardAntiparrasComponent,
    CardCamperasComponent,
    CardPantalonesComponent,
    CardBotasComponent,
    CardGuantesComponent,
    CardGorrosComponent,
    CarruselComponent,
  ]
})
export class ProductosModule { }
