/*
Dado um valor qualquer em anos, faça um algoritmo que converta tal valor e mostre o correspondente em
meses, dias e horas.
Considere o ano comercial de 360 dias e meses de 30 dias. A saída deve ser no seguinte formato
 X anos correspondem a:
           * Y meses ou
           * W dias ou
           * Z horas.
*/


var inf,
    meses,
    dias,
    horas;

inf = Number(prompt("Quantos anos quer calcular: ex 2 "));


meses = inf * 12
dias  = 360 * inf ;
horas = dias * 24;

document.getElementById("resposta").innerHTML =  inf + " Anos. São: " +meses+" Meses. E "+dias+" Dias e "+horas+" Horas";