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

//Cambiar las comunas del dropdown
window.onload = function(){
  let region:any = document.getElementById("region");
  let comunaId:any = document.querySelector("#comuna");
  let listaComunasVal:any = ["Valparaiso", "Limache", "Quillota"];
  let listaComunasRM:any = ["Maipu", "Puente Alto", "San Bernardo"];
  let fragmento:any = document.createDocumentFragment();
  let comuna:any = document.getElementById("comuna");
  let i:any;

  //esta variable se utiliza para no volver a crear la misma lista de elementos
  let cambio:any = false;
  let reset:any = false;

  comuna.addEventListener('click', function(){
    i = 0;
    //resetear la la caja comuna
    if (reset == true) {
      i++;
      comuna.childNodes.forEach(function(value:any){
        comuna.removeChild(comuna.childNodes[i]);
      });
      comuna.removeChild(comuna.lastChild);
    }

    if (region.value == "Valparaiso") {
      listaComunasVal.forEach(function(value:any){
        const option = document.createElement("option");
        option.textContent = value;
        //se añade el codigo al fragmento
        fragmento.appendChild(option);
      });
      //se termina de añadir el fragmento al sitio
      comunaId.appendChild(fragmento);
      reset = true;
    } else if (region.value == "RM"){
      listaComunasRM.forEach(function(value:any){
        const option = document.createElement("option");
        option.textContent = value;
        //se añade el codigo al fragmento
        fragmento.appendChild(option);
      });
      //se termina de añadir el fragmento al sitio
      comunaId.appendChild(fragmento);
      reset = true;
    }
  });
}

//<option value="V">Valparaiso</option>

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