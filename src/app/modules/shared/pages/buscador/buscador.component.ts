import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  mostrarbuscador = false;  // Controla si la barra de búsqueda está visible o no
  loquebusca = '';    // Modelo para el valor de la barra de búsqueda

  buscar() {
    this.mostrarbuscador = !this.mostrarbuscador;  // Cambia el estado de la barra de búsqueda
  }
}