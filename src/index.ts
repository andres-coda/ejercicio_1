import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

let pasoUno = "Instrucciones para cocinar milanesa al horno";
let pasoDos = "Encender el horno";
let pasoTres = "Agregar un poco de aceite a la azadera";
let pasoCuatro = "Distribuir por toda la superficie de la azadera";
let pasoCinco = "Poner las milanesas en la azadera";
let pasoSeis = "Agregar la azadera al horno";
let pasoSiete = "Esperar un tiempo y dar vuelta las milanesas";
let pasoOcho = "Agregar queso cremoso";
let pasoNueve = "Apagar el horno";
let pasoDiez = "Servir";

console.log(`${pasoUno}\n\n${pasoDos}\n${pasoTres}\n${pasoCuatro}\n${pasoCinco}\n${pasoSeis}\n${pasoSiete}\n${pasoOcho}\n${pasoNueve}\n${pasoDiez}`);