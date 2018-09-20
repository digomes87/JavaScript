/*
  Faça um algoritmo para ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius.
  A fórmula de conversão é C = (F - 32) * (5 / 9), sendo C a temperatura em Celsius e F a temperatura em Fahrenheit.
 */

alert("Vamos converter Fahrenheit para Celsius !!");

var f,c;

f = Number(prompt("Digite um valor em Fahrenheit:"));

c = ((f - 32 ) * (5 / 9));

alert("O valor convertido é: " + c + " Graus Celsius");