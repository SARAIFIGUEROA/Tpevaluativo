import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// Observables para obtener cambios
import { Observable } from 'rxjs';
// Itera colección leyendo información actual
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})

export class AuthService {
  // Propiedad privada para guardar rol de usuario
  private rolUsuario: string | null = null;
  // Referenciar Auth de Firebase en el servicio y ServicioFirestore
  constructor(
   private auth: AngularFireAuth,
    private serviciofirestore: AngularFirestore,) { }

  //funcion para registro
  registro(email: string, password: string) {
     // retorna el valor que es creado con el método "createEmail..."
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  //funcion para inicio de sesion
  iniciarsesion(email: string, password: string) {
      // validar la información del usuario -> saber si existe en la colección
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  //funcion para cerrar sesion 
  cerrarsesion() {
    //devueklve una promesa vacia, quita el token
    return this.auth.signOut();
  }

  // funcion para tomar el uid
  async tomaruid() {
    //nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser
    //si el usuario no respeta la estructura de la intrerfaz
    //si tuvo problemas para el registro -> ejm: Mal internet
    if (user == null) {
      return null
    } else {
      return user.uid;
    }
  }
/*retornamos del servicio firestore la cllecccion de usuarios, buscamos una refereencia en los 
email reguistrados y los comprarmaos con los ingrese el usuario al iniciar sesion y los obtiene con el .get,
 lo vuelve una promesa => da un resultado resuelto o rechazado*/
  obtenerusuario(email: string) {
    return this.serviciofirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
  
  // FUNCIÓN PARA OBTENER EL ROL DEL USUARIO
  obtenerRol(uid: string): Observable<string | null> {
    /*
      Accedemos a colección de usuarios, buscando por UID, obteniendo cambios en valores.
      Al enviar info. por tubería, "mapeamos" la colección, obtenemos un usuario especifico 
      y buscamos su atributo "rol", aún si este es "nulo"
    */
    return this.serviciofirestore.collection("usuarios").doc(uid).valueChanges()
    .pipe(map((usuario: any) => usuario ? usuario.rol: null));
  }

  // Enviar el rol obtenido -> asignarlo al rol de la variable local
  setUsuarioRol(rol: string){
    this.rolUsuario = rol;
  }

  // Obtener el rol y retornar
  getUsuarioRol(): string | null {
    return this.rolUsuario;
  }
}
