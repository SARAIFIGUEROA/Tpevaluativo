import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
//componentes de productos
import { CamperasComponent } from './pages/camperas/camperas.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { GorrosComponent } from './pages/gorros/gorros.component';
import { GuantesComponent } from './pages/guantes/guantes.component';
import { BotasComponent } from './pages/botas/botas.component';
import { AntiparrasComponent } from './pages/antiparras/antiparras.component';
//cards
import { CardComponent } from './components/card/card.component';
import { CardAntiparrasComponent} from './components/card-antiparras/card-antiparras.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    CamperasComponent,
    PantalonesComponent,
    GorrosComponent,
    GuantesComponent,
    AntiparrasComponent,
    BotasComponent,
    CardComponent,
    CardAntiparrasComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    CamperasComponent,
    PantalonesComponent,
    GorrosComponent,
    GuantesComponent,
    AntiparrasComponent,
    BotasComponent,
    CardComponent,
    CardAntiparrasComponent,
  ]
})
export class ProductosModule { }
