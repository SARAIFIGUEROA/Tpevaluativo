import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-card-botas',
  templateUrl: './card-botas.component.html',
  styleUrls: ['./card-botas.component.css']
})
export class CardBotasComponent {
  coleccionProductos: Producto[] = [];
  //variable 
  coleccionbotas: Producto[] = [];
  //variable para seleccionar productos especificos
  productoselecCionado!: Producto
  //variable para manejar estado del modal
  modalVisible: boolean = false;
  //
  constructor(public servicioCrud: CrudService) { }
  //inicializa el momento que renderiza el componente
  ngOninit(): void {
    //accedemos al metodo "obteerproducto" y nos suscribimos a los cambios
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      //Mostrara la coleccion de eda categoria hasta el momento
      this.mostrarProductoBotas();
    })
  }

  //funcion para filtrar los productos de tipo "buzos"
  mostrarProductoBotas() {
    //Iteramos la coleccion de productos con un forEach
    this.coleccionProductos.forEach(producto => {
      //si es de tipo "buzos" => condicional
      if (producto.categoria === "botas") {
        //lo sube / guarda en la coleccion de producto de tipo "Buzo"
        this.coleccionbotas.push(producto)
      }
    })
  }
 
  //funcion mostrarVer se activa con el boton que recibe el parametro de producto si no es de ese tipo no deberia mostrarlo
  //la informacion que recibnimos siempre va a ser de tipo producto
  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoselecCionado = info;
  }

}
