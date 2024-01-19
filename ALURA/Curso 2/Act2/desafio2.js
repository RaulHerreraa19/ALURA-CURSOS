/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

function saludo() {
  console.log("Hola, mundo!");
}

function saludoConParametro(nombre) {
  console.log(`Hola mundo ${nombre}`);
}

function double(numero) {
  return numero * 2;
}

function promedio(a, b, c) {
  let resultado;
  resultado = a + b + c;
  return resultado / 3;
}

function numMayor(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

function multiplicar(a) {
  return a * a;
}

saludo();
saludoConParametro("Raul");
console.log(double(6));
console.log(promedio(9, 9, 9));
console.log(numMayor(2, 5));
console.log(multiplicar(5));
