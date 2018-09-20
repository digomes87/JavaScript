/*
fonte de pesquisa: http://blog.dunderlabs.com/entendendo-ordenacao-de-arrays-em-javascript-sort-of.html
Escrever um algoritmo que lê um conjunto de 4 valores i, a, b, c, onde i é um valor inteiro e positivo e a, b, c, são quaisquer valores reais e os escreva.
A seguir:
a) Se i=1 escrever os três valores a, b, c em ordem crescente.
b) Se i=2 escrever os três valores a, b, c em ordem decrescente.
c) Se i=3 escrever os três valores a, b, c de forma que o maior entre a, b, c fique dentre os dois.
*/

var i,a,b,c,arr;

alert("Para a variavel I informe um dos seguintes valores  1,2 ou 3!");

i = Number(prompt("Digite um valor para I:"));

if (i > 3) {
    alert("Ai não né amigão, siga as regras do jogo !");
}else {
    if (i > 0) {
        a = Number(prompt("Digite um valor para A: ex 4"));
        b = Number(prompt("Digite um valor para B: ex 8"));
        c = Number(prompt("Digite um valor para C: ex 13"));

        arr = [i, a, b, c];

        if (i == 1) {
            arr.sort(function (a, b) {
                return a - b;
            })

            document.getElementById("par_saida").innerHTML = "Na ordem Crescente: " + arr;
        }

        if (i == 2) {
            arr.sort(function (a, b) {
                return b - a;
            })

            document.getElementById("par_saida").innerHTML = "Na ordem Decrescente: " + arr;
        }

        if (i == 3) {
            if ((a > b && b > c) || (c > b)) {
                document.getElementById("par_saida").innerHTML = "Maior no Meio: " + b + "-" + a + "-" + c;
            }
            if ((b > a && a > c) || (c > a)) {
                document.getElementById("par_saida").innerHTML = "Maior no meio: " + a + "-" + b + "-" + c;
            }
            if ((c > a && a > b) || (b > a)) {
                document.getElementById("par_saida").innerHTML = "Maior no meio: " + b + "-" + c + "-" + a;
            }
        }

    } else {
        alert("Preciso que I seja maior que zero, senão nao tem como brincar !");
    }
}
