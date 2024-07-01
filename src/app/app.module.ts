import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciosesionComponent } from './modules/autentificacion/pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';
import { BufandasComponent } from './modules/productos/pages/bufandas/bufandas.component';
import { PanuelosComponent } from './modules/productos/pages/panuelos/panuelos.component';
import { GorrosComponent } from './modules/productos/pages/gorros/gorros.component';
import { GuantesComponent } from './modules/productos/pages/guantes/guantes.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistroComponent,
    BufandasComponent,
    PanuelosComponent,
    GorrosComponent,
    GuantesComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
