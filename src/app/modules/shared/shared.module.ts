
//acedemos a las rutas
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//angular material 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
 //modulo que contiene el sobrenosotros.component
    CommonModule,
     AppRoutingModule,

    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,  // Para íconos
    MatInputModule, // Para campos de entrada
    FormsModule,     // Para formularios
    MatFormFieldModule,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
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
