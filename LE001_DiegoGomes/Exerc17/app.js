/*
* Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos completos, meses completos e dias.
* Considere o ano comercial 360 dias e meses de 30 dias. Por exemplo, para a entrada 378 dias, a saída deve ser
A pessoa tem completos 1 ano(s), 0 mes(es) e 18 dia(s).
*/


var qDias,
    ano,
    mes,
    dias;

qDias = Number(prompt("Quantos dias quer calcular : ex 278 "));

ano = qDias/360;
mes = (qDias % 360)% 30;
dias = (qDias % 360)% 30;


document.getElementById("resposta").innerHTML =  qDias + " Dias. São: " +ano.toFixed(0)+" Anos. E "+mes.toFixed()+" Meses e "+dias+" Dias";

