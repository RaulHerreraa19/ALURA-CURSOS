/*
Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto:
 "Estuve en {ciudad} y me acordé de ti".
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/
let title = document.querySelector("h1");
title.innerHTML = "Hora del Desafío";

function clickConsole() {
  console.log("El botón fue clicado");
}

function clickPrompt() {
  let ciudad = prompt("Escribe el nombre de una ciudad de Mexico");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickMsj() {
  alert("Yo amo JS");
}

function clickSuma() {
  let valor1 = parseInt(prompt("Escribe un valor para sumar"));
  let valor2 = parseInt(prompt("Escribe otro valor para sumar"));
  let resultado = 0;

  resultado = valor1 + valor2;
  alert(`El resultado de la suma es: ${resultado}`);
}
