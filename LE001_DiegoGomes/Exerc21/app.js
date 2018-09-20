/*
Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit.
A fórmula de conversão é F = (9 / 5) * C + 32,
sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. A saída deve ser no seguinte formato:
*/

var far,cel;

cel = Number(prompt("Digite aqui a temperatura em celsius que será convertida para Fahrenheit: "));

far =  (9 / 5) * cel + 32;

document.getElementById("par_saida").innerHTML =  cel+" Cº em Fº é: "+far;
