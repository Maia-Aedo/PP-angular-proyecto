import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: any;

  constructor() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.email]),
      comentario: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(f: { value: any; }) {
    console.log(f.value);
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("TODOS LOS CAMPOS SON OBLIGATORIOS")
    }
  }


}
