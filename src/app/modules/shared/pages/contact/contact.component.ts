import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

  export class ContactComponent {

    name: string = '';
    email: string = '';
    message: string = '';
  
    constructor(private firestore: AngularFirestore) {}
  
    Enviarmensaje() {
      if (this.name && this.email && this.message) {
        this.firestore.collection('contacts').add({
          name: this.name,
          email: this.email,
          message: this.message,
          timestamp: new Date()
        })
        .then(() => {
          alert('Mensaje enviado correctamente');
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        });
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }