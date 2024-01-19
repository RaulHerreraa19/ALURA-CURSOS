let numeroAleatorio = numRandom();
let intentos = 1;

console.log(numeroAleatorio);

function asignarValorHTML(id, text) {
  let elemento = document.getElementById(id);
  elemento.innerHTML = text;
}

function numRandom() {
  return Math.floor(Math.random() * 10 + 1);
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("txtNumero").value);
  if (numeroDeUsuario === numeroAleatorio) {
    asignarValorHTML(
      "parrafoIndicaciones",
      `Encontraste el numero aleatorio en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("txtNumero").setAttribute("disabled", "true");
  } else {
    if (numeroDeUsuario > numeroAleatorio) {
      asignarValorHTML("parrafoIndicaciones", "El numero secreto es menor");
    } else {
      asignarValorHTML("parrafoIndicaciones", "El numero secreto es mayor");
    }
    intentos++;
    limpiar();
  }
  return;
}

function limpiar() {
  document.getElementById("txtNumero").value = "";
}

function valoresIniciales() {
  asignarValorHTML("parrafoIndicaciones", "Adivina el numero entre el 1 y 10");
  asignarValorHTML("Title", "Juego del numero secreto");
  numeroAleatorio = numRandom();
  limpiar();
  intentos = 1;
  document.getElementById("txtNumero").removeAttribute("disabled");
}

function reiniciar() {
  valoresIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

valoresIniciales();
