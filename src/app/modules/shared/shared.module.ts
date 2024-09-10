import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//acedemos a las rutas
import { AppRoutingModule } from 'src/app/app-routing.module';
//angular material 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { SobrenosotrosModule } from '../sobrenosotros/sobrenosotros.module';
import { BuscadorComponent } from './pages/buscador/buscador.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BuscadorComponent,
  ],
  imports: [
    SobrenosotrosModule, //modulo que contiene el sobrenosotros.component
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,  // Para íconos
    MatInputModule, // Para campos de entrada
    FormsModule,     // Para formularios
    MatFormFieldModule,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BuscadorComponent,

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,  // Para íconos
    MatInputModule, // Para campos de entrada
    FormsModule,     // Para formularios
    MatFormFieldModule,
  ]
})
export class SharedModule { }
