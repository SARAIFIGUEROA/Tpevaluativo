import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-camperas',
  templateUrl: './card-camperas.component.html',
  styleUrls: ['./card-camperas.component.css']
})
export class CardCamperasComponent {
  // Colección de todos los productos de forma local
  coleccionProductos: Producto[] = [];

  // Colección de productos de una sola categoría
  coleccioncamperas: Producto[] = [];

  // Variable para seleccionar productos específicos
  productoSeleccionado!: Producto;

  // Variable para manejar estado del modal
  modalVisible: boolean = false;

  //directivas para comunicarse con el componente padre
@Input()productoReciente :string = '';

//@output sera definido como un nuevo evento
@Output()productoAgregado = new EventEmitter<Producto>()

stock: number=0;

  // Patentamos de forma local el servicio para acceder en él
  constructor(public servicioCrud: CrudService,
    public servicioCarrito: CarritoService //Aca el servicio carrito llama a carritoservice
  ){}

  // Inicializa al momento que renderiza el componente
  ngOnInit(): void{
    // Accedemos a método 'obtenerProducto' y nos subscribimos a los cambios
    // recibimos notificación ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      // Mostrará la colección de esa categoría hasta el momento
      this.mostrarProductoCampera();
    })
  }

  // Función para filtrar los productos de tipo "camperas"
  mostrarProductoCampera(){
    // Iteramos colección de productos con un 'forEach'
    this.coleccionProductos.forEach(producto => {
      // Si es de tipo "camperas" -> condicional
      if(producto.categoria === "camperas"){
        // Lo sube/ guarda en la colección de productos de tipo "camperas"
        this.coleccioncamperas.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
  agregarProducto(info:Producto){
    const stockDeseado = Math.trunc(this.stock);

    if(stockDeseado<=0 || stockDeseado>info.stock){
      Swal.fire({
        title: "El stock ingresado no es válido",
        text: "Ingrese un valor valido",
        icon: "error"
      });
    }else{
      this.servicioCarrito.crearPedido(info,stockDeseado);

    }
  }
}