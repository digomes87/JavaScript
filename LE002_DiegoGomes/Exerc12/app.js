/*
Escreva um programa que mostra a soma da seguinte série de 100 termos:
1 -1/2+ 1-6
*/


var a;
var sinal = -1;
var s = 1;

for (var i=1; i <=100; i++){
    s = s + (sinal) * (1/(i*2) );
    sinal = sinal * (-1);
}
document.getElementById("resultado").innerHTML = "Resutlado: "+s;
