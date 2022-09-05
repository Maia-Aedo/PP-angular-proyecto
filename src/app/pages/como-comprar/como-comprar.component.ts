import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-comprar',
  templateUrl: './como-comprar.component.html',
  styleUrls: ['./como-comprar.component.css']
})
export class ComoComprarComponent implements OnInit {

  //img[src] = 'imagen' alt ="aun no hay imagen"
  /* 
  imagen = string;
   */

  constructor() { }

  ngOnInit(): void {
  }

  /*
  cargarImagen(event:any): {
    let archivo = event.target.file[0]);
    obtiene el lector de la imagen
    let reader = new FileReader();
    if (archivo!=undefined) {
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        devuelve un resultado
        let url = reader.result;
        if(url!=null) {
          this.imagen = url.toString;
        }
      }
    }
  }
  */
}
