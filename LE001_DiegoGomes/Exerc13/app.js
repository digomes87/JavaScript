/*
* Faça um algoritmo para ler dois números inteiros A e B. Depois mostrar o resultado do
  quadrado da diferença do primeiro pelo segundo.
*/

var a,b,resultado;

a = Number(prompt("Digite um valor para A: "));
b = Number(prompt("Digite um valor para B"));

resultado = (a*a) - b;

document.getElementById("resultado").innerHTML = "Resultado: " + resultado;