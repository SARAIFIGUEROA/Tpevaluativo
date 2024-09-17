import { Component } from '@angular/core';

import { Categorias } from 'src/app/models/categorias';

@Component({
  selector: 'app-categoriashome',
  templateUrl: './categoriashome.component.html',
  styleUrls: ['./categoriashome.component.css']
})
export class CategoriashomeComponent {
  public img: Categorias[];

  constructor() {

    this.img = [
      {
        id: "",
        router: "camperas",
        categoria: "categoria1.jpeg",

      },
      {
        id: "",
        router: "pantalones",
        categoria: "categoria2.jpeg"

      }, {
        id: "",
        router: "botas",
        categoria: "categoria3.jpeg"

      },
      {
        id: "",
        router: "antiparras",
        categoria: "categoria4.jpeg"

      },
      {
        id: "",
        router: "guantes",
        categoria: "categoria5.jpeg"

      },
      {
        id: "",
        router: "gorros",
        categoria: "categoria6.jpeg"

      },

    ]
  }
}
