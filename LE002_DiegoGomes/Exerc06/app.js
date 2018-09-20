/*
 Escreva um programa que leia um número n (número de termos de uma progressão aritmética),
 a1 (o primeiro termo da progressão) e r (a razão da progressão) e escreva os n termos desta progressão, bem como a soma dos elementos.

 Consultar colegas, acrdito q esta errada !
*/

var a1 = 0,
    n = 0,
    r = 0,
    an = 0;

a1 = Number(prompt("Informe um valor para o primeiro Termo:"));
n = Number(prompt("Informe o numero de termos na progressão: "));
r = Number(prompt("Informe a razão da progressão: "));

an = a1 + (n - 1) * r;




document.getElementById("par_saida").innerHTML = "Valores somados: "+an;