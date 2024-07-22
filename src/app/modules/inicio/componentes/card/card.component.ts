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
      {
        nombre: "Bufanda",
        valor: 6000,
        imagen: "./assets/campera1.jpg",
        alt: "imagen",
      },
      {
        nombre: "Bufanda",
        valor: 100,
        imagen: "./assets/campera2.jpg",
        alt: "imagen",
      },
      {
        nombre: "Bufanda",
        valor: 30000,
        imagen: "./assets/campera3.jpg",
        alt: "imagen",
      },
      //antiparras
      {
        nombre: "Bufanda",
        valor: 30000,
        imagen: "./assets/antiparra1.jpg",
        alt: "imagen",
      },
      {
        nombre: "Bufanda",
        valor: 30000,
        imagen: "./assets/antiparra2.jpg",
        alt: "imagen",
      },
      {
        nombre: "Bufanda",
        valor: 30000,
        imagen: "./assets/antiparra3.jpg",
        alt: "imagen",
      },
     
    ];
  }
}

