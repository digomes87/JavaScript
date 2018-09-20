/*
Elaborar um algoritmo que calcule e apresente o
volume de uma caixa retangular por meio da fórmula V = COMPRIMENTO * LARGURA * ALTURA.
*/

var comprimento, largura, altura, v;

alert("Vamos calcular o volume de uma Caixa Retangular");

comprimento = Number(prompt("Informe o comprimento:"));
largura = Number(prompt("Informe a largura: "));
altura = Number(prompt("Informe a altura: "));

v =  comprimento * largura * altura;

document.getElementById("resposta").innerHTML = "O volume da Caixa é: " + v;
