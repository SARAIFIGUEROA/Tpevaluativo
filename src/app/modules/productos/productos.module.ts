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
import { CardAntiparrasComponent} from './components/card-antiparras/card-antiparras.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardCamperasComponent } from './components/card-camperas/card-camperas.component';
import { CardPantalonesComponent } from './components/card-pantalones/card-pantalones.component';
import { CardBotasComponent } from './components/card-botas/card-botas.component';
import { CardGuantesComponent } from './components/card-guantes/card-guantes.component';
import { CardGorrosComponent } from './components/card-gorros/card-gorros.component';

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
    ProductoComponent,
    CardCamperasComponent,
    CardPantalonesComponent,
    CardBotasComponent,
    CardGuantesComponent,
    CardGorrosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    AdminModule,
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
