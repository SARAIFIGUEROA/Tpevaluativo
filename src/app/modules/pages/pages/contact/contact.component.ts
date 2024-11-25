import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

  export class ContactComponent {
    alert(){
      Swal.fire({
        title: "¡Gmail enviado!",
        text: "¡Intentaremos enviarte una respuesta lo antes posible!",
        icon: "success"
      });
  }
  }