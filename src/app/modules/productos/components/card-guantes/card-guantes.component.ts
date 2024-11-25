import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card-guantes',
  templateUrl: './card-guantes.component.html',
  styleUrls: ['./card-guantes.component.css']
})
export class CardGuantesComponent {
  coleccionProductos: Producto[] = [];
  //variable 
  coleccionguantes: Producto[] = [];
  //variable para seleccionar productos especificos
  productoSeleccionado!: Producto
  //variable para manejar estado del modal
  modalVisible: boolean = false;

//directivas para comunicarse con el componente padre
@Input()productoReciente :string = '';

//@output sera definido como un nuevo evento
@Output()productoAgregado = new EventEmitter<Producto>()

stock: number=0;
  //
  constructor(public servicioCrud: CrudService,
    public servicioCarrito: CarritoService //Aca el servicio carrito llama a carritoservice
  ) { }
  //inicializa el momento que renderiza el componente
  ngOninit(): void {
    //accedemos al metodo "obteerproducto" y nos suscribimos a los cambios
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      //Mostrara la coleccion de eda categoria hasta el momento
      this.mostrarproductoguantes();
    })
  }

  //funcion para filtrar los productos de tipo "buzos"
  mostrarproductoguantes() {
    //Iteramos la coleccion de productos con un forEach
    this.coleccionProductos.forEach(producto => {
      //si es de tipo "guantes" => condicional
      if (producto.categoria === "guantes") {
        //lo sube / guarda en la coleccion de producto de tipo "Buzo"
        this.coleccionguantes.push(producto)
      }
    })
  }
 
  //funcion mostrarVer se activa con el boton que recibe el parametro de producto si no es de ese tipo no deberia mostrarlo
  //la informacion que recibnimos siempre va a ser de tipo producto
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