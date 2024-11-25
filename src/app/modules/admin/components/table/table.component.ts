import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//formControl: rastrea el valor, estado, y validación de ese campo específico.
//formGroup: gestiona el estado y las validaciones de un grupo de controles como una unidad.
//validators: Ayuda a asegurar que los datos ingresados por el usuario cumplen ciertas reglas antes de enviarlos al servidor.
//sweet
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos colecvcion local de productos  -> la definimos como array
  coleccionproductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacios

  modalvisibleproductos: boolean = false;

  /*atributos alfanumericos (string) se inicializa con comilla simple
  atributos numericos (number) se iniucializan con 0 ('0')*/

  //definimos variables para url de img y una para obtener la url de imagen de tipo string las dos
  nombreurlimg!: string;
  urlimg!: string;

  //definimos formuklarios para los productos 
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    //imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required),
  })

  constructor(public serviciocrud: CrudService) { }
   /*Cuando el componente TableComponent se inicializa, se ejecuta ngOnInit().
Dentro de ngOnInit(), se llama al método obtenerProductos() del servicio CrudService.
obtenerProductos() devuelve un observable que emite los datos de los productos.
Se suscribe al observable con subscribe().
Cuando los datos de los productos son recibidos, se ejecuta la función flecha.
La lista de productos recibida (almacenada en producto) se asigna a la propiedad coleccionProductos del componente, lo que probablemente actualizará la vista con esos productos.
*/
  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.serviciocrud.obtenerProducto().subscribe(producto => {
      this.coleccionproductos = producto;
    })
  }


  async AgregarProducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
        idproducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: '',
        alt: this.producto.value.alt!,
        stock: this.producto.value.stock!
      }

  // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.serviciocrud.subirImagen(this.nombreurlimg, this.urlimg, "productos")
        .then(resp => {
          //encapsulamos la respuesta 
          this.serviciocrud.obtenerurlimg(resp)
            .then(url => {
              //crearproducto recibe el njuevo producto y la url recibida
              this.serviciocrud.crearproducto(nuevoproducto, url)
                .then(producto => {
                  Swal.fire({
                    title: "Felicidades!",
                    text: "Se pudo subir con exito!",
                    icon: "success"
                  });
                  //resetea el formulario y las casillas qeudan vacias
                  this.producto.reset();
                })
                .catch(error => {
                  Swal.fire({
                    title: "Error",
                    text: "Hubo un error al subir producto!  \n" + error,
                    icon: "error"
                  });
                  this.producto.reset();
                });
            })
        })
    }
  }

  //creamos metodo caragr img
  cargarImg(event: any) {
    //variable para obtener el archivo subido desde el input del html
    let archivo = event.target.files[0];
    //creamos objeto wue el archivo file pueda leerlo
    let reader = new FileReader();
    if (archivo != undefined) {
      reader.readAsDataURL(archivo);
 /*
        Llamamos a método readAsDataURL para leer toda la información recibida
        Envíamos como parámetro al "archivo" porque será el encargador de tener la 
        info ingresada por el usuario
      */
      reader.onloadend = () => {
        let url = reader.result;
        if (url != null) {
          this.nombreurlimg = archivo.name;
          this.urlimg = url.toString();
        }
      }
    }
  }
  //vinculamos con el modal del html
  MostrarBorrar(productoSeleccionado: Producto) {
    this.modalvisibleproductos = true;
    this.productoSeleccionado = productoSeleccionado;
  }


  borrarProducto() {
    //enviamos el id del producto para identificarlo en la bd y la url de la imagen va a servir para eliminar desde alamcenamiento storage
    this.serviciocrud.eliminarProducto(this.productoSeleccionado.idproducto, this.productoSeleccionado.imagen,)
      .then(respuesta => {
        Swal.fire({
          title: "Felicidades!",
          text: "Se pudo eliminar con exito!",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al subir producto!  \n" + error,
          icon: "error"
        });
      })

  }

  //editar productos
  /*va a recibir un producto seleccionado por el usuario, va a llamar al formularioi de producto
   y va a tomar uno por uno los atributos del formulario*/
  Mostrareditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;

    /*todos los vlaores del producto seleccionado los va a autocompletar en el 
    formulario del modal (menos el ID)*/

    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      alt: productoSeleccionado.alt,
      stock: productoSeleccionado.stock,
    })
  }

  //funcion editar producto
  //se vincula al boton editarProducto del modal editar
  EditarProducto() {
    //recibbimos informacion nueva que el usuario ingrese y lo enciamos a la base de datos
    let datos: Producto = {
      //solo Idproducto no se modirfica por el usuario
      idproducto: this.productoSeleccionado.idproducto,
      //los demas artributos recibiram nueva informacion desde el formulario
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!,
      stock: this.producto.value.stock!

    }
 //verificamos si el usuario ingresa o no una nueva imagen
    if (this.urlimg) {
      this.serviciocrud.subirImagen(this.nombreurlimg, this.urlimg, "productos")
        .then(resp => {
          this.serviciocrud.obtenerurlimg(resp)
            .then(url => {
              datos.imagen = url; //actualizamos la imagen en los datos del formulario

              this.actualizarproducto(datos); //actuaolizamos los datos
              this.producto.reset(); //vaciamos cdasiolleros del formulrio 
            })
            .catch(error => {
              Swal.fire({
                    title: "Error",
                    text: "Hubo un error al subir la imagen!  \n" + error,
                    icon: "error"
                  });
              
          this.producto.reset();
            })
        })
       /* actulaizamos formulario con los datos recibidos del usuario, pero sin
      modificar la imagen ya existente en Firestore y en Storage */

      }else{
      this.actualizarproducto(datos);
    }
  }

//  la informacion ya existente de los productos
  actualizarproducto(datos: Producto) {
    //enviamos metodo el id del producto seleccionado y los datos actualizados 
    this.serviciocrud.editarProducto(this.productoSeleccionado.idproducto, datos)
      .then(producto => {
        Swal.fire({
          title: "Felicidades!",
          text: "Se pudo modificar con exito!",
          icon: "success"
        });
        this.producto.reset();
      })

      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al modificar!  \n" + error,
          icon: "error"
        });
      });
  }
}