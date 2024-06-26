import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciosesionComponent } from './modules/autentificacion/pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistroComponent,

  
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
