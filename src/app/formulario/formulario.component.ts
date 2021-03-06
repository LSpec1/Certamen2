import { Component, OnInit } from '@angular/core';

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

window.onload = function(){

  //Cambiar las comunas del dropdown
  let comuna:any = document.getElementById("comuna");
  comuna.addEventListener('click', function(){
    dropdowns();
  });

  //adicionar etiquetas
  let cuadro:any = document.getElementById("cuadroAnadir");
  cuadro.style.display = "none";
  let anadirTag:any = document.getElementById("anadirTag");
  anadirTag.addEventListener('click', function(){
    mostrarTag();
  });

  let adicionar:any = document.getElementById("adicionar");
  adicionar.addEventListener('click', function(){
    adicionarEtiquetas();
  });

  //imprimir datos
  let submit:any = document.getElementById("crear");
  submit.addEventListener("click", function() {
    imprimirFormulario();
  });

  //limpiar todo
  let btnclear = document.getElementById("limpiar");
  btnclear?.addEventListener('click', function(){
    limpiar();
  });
}

//Funciones---------------------------------------------------------------------------------------------------------------------------------------

function dropdowns(){
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
      //se a??ade el codigo al fragmento
      fragmento.appendChild(option);
    });
    //se termina de a??adir el fragmento al sitio
    comunaId.appendChild(fragmento);
    reset = true;
  } else if (region.value == "RM"){
    listaComunasRM.forEach(function(value:any){
      const option = document.createElement("option");
      option.textContent = value;
      //se a??ade el codigo al fragmento
      fragmento.appendChild(option);
    });
    //se termina de a??adir el fragmento al sitio
    comunaId.appendChild(fragmento);
    reset = true;
  }
}

function mostrarTag() {
  let cuadro:any = document.getElementById("cuadroAnadir");
  cuadro.style.display = "inline";
}

function adicionarEtiquetas(){

  let adicionar:any = document.getElementById("adicionar");
  let habilidad:any = document.getElementById("habilidad");
  let etiquetas:any = document.getElementById("etiquetas");

  if(habilidad.value != "") {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    div.setAttribute("style", "margin: 10px");
    div2.style.border = "1px solid black";
    div3.setAttribute("style", "padding-right: 97px");
    div4.setAttribute("style", "padding-left: 15px");

    div4.textContent = habilidad.value;
    div3.appendChild(div4);
    div2.appendChild(div3);
    div.appendChild(div2);
    etiquetas.appendChild(div);

    
    let cuadro:any = document.getElementById("cuadroAnadir");
    cuadro.style.display = "none";
  }
}

function imprimirFormulario(){
  let submit:any = document.getElementById("crear");

  let nombre:any = document.getElementById("nombre");
  let edad:any = document.getElementById("edad");
  let opciones:any = document.getElementsByName("gridRadios");
  let fecha_nacimiento:any = document.getElementById("fecha_nacimiento");
  let region:any = document.getElementById("region");
  let comuna:any = document.getElementById("comuna");
  let direccion:any = document.getElementById("direccion");
  let observaciones:any = document.getElementById("observaciones");
  let habilidades:any = document.getElementById("habilidades");
  
  let genero:any = document.getElementsByName("gridRadios")[0];

  console.log(nombre.value);
  console.log(edad.value);
  console.log(genero.value);
  console.log(fecha_nacimiento.value);
  console.log(region.value);
  console.log(comuna.value);
  console.log(direccion.value);
  console.log(observaciones.value);
  console.log(habilidades.value);
}

function limpiar(){
  let inputs = document.querySelectorAll("input");
  let textarea = document.querySelectorAll("textarea");

  inputs.forEach(input => input.value ='');
  inputs.forEach(input => input.checked = false);
  textarea.forEach(textarea => textarea.value = '');
}