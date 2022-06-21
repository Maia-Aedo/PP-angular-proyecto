import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longText = `Desde 2012 con el nacimiento de una idea que cambiaría todo, 
  comenzó como un simple emprendimiento de dos estudiantes llenos de motivación y espíritu
  de trabajo. Con el pasar de los años, ganar la confianza de nuestros clientes se volvió nuestra
  prioridad y nos permitió abrirnos a un nuevo mundo de oportunidades donde internacionalmente ofrecemos
  servicio y asesoramiento.`;
  longText2 = `El mejor servicio para empresas u organizaciones ya llegó. Nuestro equipo
  de confianza resolverá toda duda e incoveniente que se presente durante el proceso de
  trabajo.`;
  longText3 = `En Serins brindamos una amplia variedad de cursos en los que puedes
  capacitarte de la mano especialistas calificados dentro del área. Junto con
  pasantías, la posibilidad de trabajar en una de muchas de nuestras sedes en el mundo.`;
}
