import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importaciones 
import { AuthService } from '../../servicios/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

//crypto
import * as CryptoJS from 'crypto-js';
//iimportamos sweet alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true;
  //mostrar contraseña

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,) { }

  //lo que se ingrese, definimos la interfaz de usuario
  Insesion: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  async iniciarsesion() {
    const credenciales = {
      email: this.Insesion.email,
      password: this.Insesion.password,
    }

    try {
      //obtenemos usuario de la bD
      const usuariobd = await this.servicioAuth.obtenerusuario(credenciales.email)
      //condicional verificada que ese usuario de la BD existiera o que sea igual al de nuestra colección
      if (!usuariobd || usuariobd.empty) {
        Swal.fire({
          title: "Hubo un error!",
          text: "No se pudo iniciar sesion!",
          icon: "error"
        });
        this.limpiarInputs();
        return;
      }
      // Vincula al primer documento de la colección "usuarios" que se obtenía desde la BD
      const usuarioDoc = usuariobd.docs[0];
      /*extrae los datos del documentoen forma de objeto y se especifica que va a ser del tipo
       "usuaro" (se refiere a la interfaz Usuario)*/
      const usuariodata = usuarioDoc.data() as Usuario

      //encripta la contraseña que el usuario envia mediante "iniciar sesion"
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      //condicional que compara la contrasewña que acabamos de encriptar conn la que recibimos de "usuariodata"
      if (hashedPassword !== usuariodata.password) {
        Swal.fire({
          title: "Bien!",
          text: "Se inicio con exito",
          icon: "success"
        });
        this.Insesion.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarsesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: "Bien!",
            text: "Se inicio sesion con exito!",
            icon: "success"
          });
          // Almacenamos y enviamos por parametro el rol de los datos de usuario obtenido

          this.servicioAuth.setUsuarioRol(usuariodata.rol);

          if (usuariodata.rol === "admin") {
            console.log("Inicio de administrador");

            // Si es administrador, redirecciona a la vista de "admin"
            this.servicioRutas.navigate(['/admin']);
          } else {
            console.log("Inicio de visitante");

            // Si es otro tipo de usuario, redirecciona al "inicio"
            this.servicioRutas.navigate(['/inicio']);
          }
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: "No se pudo iniciar sesion",
            icon: "error"
          });
          this.limpiarInputs();
        })
    } catch (error) {
      this.limpiarInputs();
    }
  }
  limpiarInputs() {
    const inputs = {
      email: this.Insesion.email = '',
      password: this.Insesion.password = ''
    }
  }
}