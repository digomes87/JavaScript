/*. 
faca um programa que le um inteiro n sem sinal e uma quantidade de bits q. 
Mostre  o resultado de n rotacoes q bits a esquerda e q bits a direita. Use os operadores de rotacao em bits.

*/

var n,
    q,
    rotacao;

n = Number(prompt("Digite um numero Inteiro: "));
q = Number(prompt("Digite a quantidade de Bits: "))

rotacaoDir = n >> q;
rotacaoEsq = n << q;

alert(rotacaoDir);
alert(rotacaoEsq);

//document.getElementById("par_saida").innerHTML = "teste";