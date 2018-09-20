/*
Faça um algoritmo para ler três números inteiros que representam os possíveis lados de uma figura geométrica.
O algoritmo deve testar e escrever se estes lados podem ou não formar um triângulo.
Para formar os lados de um triângulo, cada um dos valores tem que ser menor que a soma dos outros dois.
*/
var a,b,c;

a = Number(prompt("Digite o valor de A: "));
b = Number(prompt("Digite o valor de B: "));
c = Number(prompt("Digite o valor de C: "));


if ( a > (b + c))
    alert("A é valido");

if ( b > (a + c))
    alert("B é valido")

if ( c > (a + b))
    alert("C é valido");

// envindo msg pro HTML
// noinspection JSAnnotator
document.getElementById("par_saida") = "Pode formar um Trinagulo";
