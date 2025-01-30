let containerElement = document.getElementById("tortas");
containerElement.innerHTML = "";

for(i=0; i<productos.tortas.length; i++) {
let tarjetaElement = document.createElement("div");
tarjetaElement.className = "tarjeta";
let tarjetanombreElement = document.createElement("h3");
tarjetanombreElement.innerHTML = productos.tortas[i].nombre;
let tarjetaimgElement = document.createElement("img");
tarjetaimgElement.src = productos.tortas[i].imagen;
tarjetaimgElement.className = "tarjetaimg";

containerElement.appendChild(tarjetaElement);
tarjetaElement.appendChild(tarjetanombreElement);
tarjetaElement.appendChild(tarjetaimgElement);
}