import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
//angular material 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,

    AppRoutingModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,

    AppRoutingModule
  ]
})
export class SharedModule { }
