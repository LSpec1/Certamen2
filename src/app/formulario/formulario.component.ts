import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




//imprimir datos personales
let formulario:any = document.getElementById("formulario");

/*formulario.addEventListener("submit", function(event:any) {
  let nombre:any = document.getElementById("nombre");
  let edad:any = document.getElementById("edad");
  //let genero:any = document.getElementById("genero");
  let fecha_nacimiento:any = document.getElementById("fecha_nacimiento");
  let region:any = document.getElementById("region");
  let comuna:any = document.getElementById("comuna");
  let direccion:any = document.getElementById("direccion");
  //let observaciones:any = document.getElementById("observaciones");
  //let habilidades:any = document.getElementById("habilidades");

  console.log(nombre.value);
  console.log(edad.value);
  //console.log(genero.value);
  console.log(fecha_nacimiento.value);
  console.log(region.value);
  console.log(comuna.value);
  console.log(direccion.value);
  //console.log(observaciones.value);
  //console.log(habilidades.value);
});*/