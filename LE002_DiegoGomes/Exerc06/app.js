/*
 Escreva um programa que leia um número n (número de termos de uma progressão aritmética),
 a1 (o primeiro termo da progressão) e r (a razão da progressão) e escreva os n termos desta progressão, bem como a soma dos elementos.

 Consultar colegas, acrdito q esta errada !
*/

var n = 0,
    a1 = 0,
    r = 0;
    termo = 0,
    soma = 0,
    listaPA = "";

// Leitura de n, a1 e r 
n = Number(prompt("Número de termos da P.A.?"));
a1 = Number(prompt("Primeiro termo?"));
r = Number(prompt("Razão?"));

termo = a1;  // primeiro termo

// Loop para gerar os n termos
while (n > 0){
    soma += termo;  // soma dos termos
    listaPA += termo + " "; // a1 a2 a3 ...
    termo += r;  // próximo termo
    n--;
}

// Apresenta os valores no documento html, elemento par_saida
document.getElementById("par_saida").innerHTML = "Soma dos  termos: " + soma + "<br> P.A.:{ " + listaPA + "}";