import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from 'src/app/modules/autentificacion/servicios/auth.service'; 

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  coleccionPedidos:Pedido[] = [];
//el constructor es para las clases que son los objetos, 
//para angular son los servicios que va a utilizar para funcionar bien

  constructor(
    public servicioCarrito:CarritoService,
    public servicioAuth: AuthService
  ){}

  ngOnInit(){
    this.servicioAuth.tomaruid().then(uid => {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(rol => {
          if (rol === 'usuario') {
            //Inicializamos el carrito
            this.servicioCarrito.iniciarCarrito();

            this.servicioCarrito.obtenerCarrito().subscribe(producto =>
              this.coleccionPedidos = producto
            )
          }else{
            console.error('No se obtuvo el usuario de manera correcta');
          }
        })
      }
    })
  }

  quitarPedido(pedido:Pedido){
    this.servicioCarrito.borrarPedido(pedido);
  }
}