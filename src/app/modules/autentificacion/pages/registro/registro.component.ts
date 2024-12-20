import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificacion
import { AuthService } from '../../servicios/auth.service';
//importamos servicios de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
//importamos componentes de rutas de angular
import { Router } from '@angular/router';

//crypton

import * as CryptoJS from 'crypto-js'
//libreria sweet
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de contraseña
  hide = true;
  //registro- importamos interfaz de usuario  => inicializamos
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: 'usuario',  //-> todos los usuarios al registrarse seran usuario
    password: '',
  }
  //Un arreglo de tipo usuario, significa que solo puede resibir valores que esten declarados en la intrerfaz usuario y de tipo array
  coleccionUsuarios: Usuario[] = []

  constructor(public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servicioFireStore: FirestoreService,
  ) { }
  //funcion para el registro de nuevos usuarios
  async registrar() {
    //constsnte credenciales va a resguardar la informacion que ingrese el usuario
    //registro con servicio, constante credenciales va a resguardar la información que ingrese el usuario
    // REGISTRO CON SERVICIO DE AUTH
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    const res = this.servicioAuth.registro(credenciales.email, credenciales.password)
      //then es una promesa que devuelve el mismo valor si tdo sale bien
      .then(res => {
        Swal.fire({
          title: "Felicidades!",
          text: "Se pudo registrar con exito!",
          icon: "success"
        });
        //el metodo navigate nos direcciona a otra vista, en este caso a inicio
        this.servicioRutas.navigate(['/inicio'])
      })
      //encapsula un error. captura una falla y la vuelve error cuando la promesa salg mal
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al registrar el usuario! \n" + error,
          icon: "error"
        });
      });
    //constante uid captura el identificado de la base de datos
    const uid = await this.servicioAuth.tomaruid();
    //se le asigna al atributo de la interfaz 
    this.usuarios.uid = uid;
    /*ES UN ALGORITMO de hash seguro que toma una entrada (EN ESTE CASO LA CONTRASEÑA) 
    Y PRODUCE UNA CADENA DE CARACTERES HEXADECIMNAL QUE VA A REPRESENTAR A SU HASH,
    * toString: Convierte el resultado en la cadena de caracteres legible*/
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();
    //el to string va a convertir el resultado en la cadena de caracteres leghle
    this.guardarusuario();
    //llamamos la funcion para ejecutarla*/
    this.limpiarinputs();
    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }
  /*guardar usuarios, Función que accede a servicio FIRESTORE y envía la información 
    agrega junto al UId */
  async guardarusuario() {
    this.servicioFireStore.agregarusuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('error =>', err);
      })
  }

  //funcion para vaciar inputs
  limpiarinputs() {
    //en constante input llamamos atributos y los inicializamos como vacios
    const input = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = 'vis',
      password: this.usuarios.password = '',

    }
  }
}
