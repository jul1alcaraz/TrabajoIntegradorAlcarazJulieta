function explicacion(params) {
  alert(
    "Esta pagina web perteneciente a la catedra, buscamos que mediante las imagenes radiologicas presentes puedas comparar la que vos realizaste y asi verifiques si cumplen los criterios de evaluacion y criterio"
  );
}

function ingresarMmii() {
  const img = document.getElementById("imagenmmii");
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

let items = [];

const formulario = document.getElementById("formularioFaltante");
const input = document.getElementById("inputFaltante");
const lista = document.getElementById("listaFaltantes");

const mostrarLista = () => {
  lista.innerHTML = items
    .map((item) => `<div class="tarjeta"> ${item} </div>`)
    .join(" ");
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputFaltante = input.value.trim();
  if (inputFaltante === " ") return;
  items.push(inputFaltante);
  input.value = " ";
  mostrarLista();
});
