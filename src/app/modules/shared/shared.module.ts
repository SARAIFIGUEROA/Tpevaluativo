import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//acedemos a las rutas
import { AppRoutingModule } from 'src/app/app-routing.module';
//angular material 
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


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
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,

]
})
export class SharedModule { }
