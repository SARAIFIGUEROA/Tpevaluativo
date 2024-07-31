import { Component } from '@angular/core';
//importamos la interfaz 
import { Bufanda } from 'src/app/models/bufanda';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Bufanda[];
  constructor() {
    this.info = [
  
      //antiparras
      {
        nombre: "Antiparras",
        valor: 30000,
        imagen: "./assets/antiparra1.jpg",
        alt: "imagen",
      },
      {
        nombre: "Antiparras",
        valor: 30000,
        imagen: "./assets/antiparra2.jpg",
        alt: "imagen",
      },
      {
        nombre: "Antiparras",
        valor: 30000,
        imagen: "./assets/antiparra3.jpg",
        alt: "imagen",
      },
     
    ];
  }
}

