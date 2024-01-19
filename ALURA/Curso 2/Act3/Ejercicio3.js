//
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
//

//Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados.
function calcularIMC(peso, altura) {
  let imc = 0;
  imc = peso / Math.pow(altura, 2);
  return imc;
}
console.log(calcularIMC(68, 1.75));

//
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//
function factorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log("El factorial es: " + factorial(5));

//
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
//Para esto, considera la cotización del dólar igual a R$4,80.
//
function convertirMoneda(pesos) {
  dolar = 17.18;
  resultado = pesos / dolar;
  return parseFloat(resultado).toFixed(2);
}
console.log(convertirMoneda(150));

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaPerimetroRectangulo(altura, ancho) {
  let area = 0;
  let perimetro = 0;
  area = altura * ancho;
  perimetro = altura * 2 + ancho * 2;
  console.log(`El area del rectangulo es: ${area}`);
  console.log(`El perimetro del rectangulo es: ${perimetro}`);
}

areaPerimetroRectangulo(5, 5);
//
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//
function areaPerimetroCirculo(radio) {
  const pi = Math.PI;
  let area = pi * Math.pow(radio, 2);
  let perimetro = pi * 2 * radio;

  console.log(`El area del circulo es: ${area}`);
  console.log(`El perimetro del circulo es: ${perimetro}`);
}
areaPerimetroCirculo(6);
//
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
//
function tablaMultiplicar(num) {
  let resultado = 1;
  for (let i = 1; i <= 10; i++) {
    resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
  }
}

tablaMultiplicar(5);
