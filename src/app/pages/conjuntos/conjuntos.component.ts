import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  longText1 = `Sweater de lana, mangas acampanadas`;
  longText2 = `Jardinero de Jean`;
  longText3 = `Remera mangas largas de hilo`;
  longText4 = `Pulover de peluche con perlas y puño`;
  longText5 = `Pantalón Largo cuadrillé`;
  longText6 = `Pulover holgado de peluche`;
  longText7 = `Maxibuso con estampa`;
  longText8 = `Jean mom con estampa de mariposas`;
  longText9 = `Polera de hilo`;
}
