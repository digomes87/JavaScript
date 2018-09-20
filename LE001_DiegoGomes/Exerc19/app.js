/*
Elaborar um algoritmo que calcule e apresente o
volume de uma caixa retangular por meio da fórmula V = COMPRIMENTO * LARGURA * ALTURA.
*/

var notaUm, notaDois, notaTres, media;

alert("Vamos calcular a media Harmonica");

notaUm = Number(prompt("Informe a primeira Nota:"));
notaDois = Number(prompt("Informe a segunda Nota: "));
notaTres = Number(prompt("Informe a Terceira Nota: "));



media = 3 /((1/notaUm)+(1/notaDois)+(1/notaTres));
//media =  (notaUm+notaDois+notaTres)/3;

document.getElementById("resposta").innerHTML = "A media é : " + media;
