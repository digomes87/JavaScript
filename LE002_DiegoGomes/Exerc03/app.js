/*
Elaborar um programa para calcular a soma dos n primeiros múltiplos de um inteiro k, onde n e k são lidos do teclado.
*/

var n = 1, 
    k = 0 , 
    resultado = 0, 
    soma = 0;

for (i=0; i < n; i++){
    n = Number(prompt("Digite um valor para n "));
    k = Number(prompt("Digite um valor para K "));

    resultado = n * k;
    soma = resultado + resultado;

    // Loop para gerar n múltiplos de k
    for (i=1; i <= n; i++) {
        soma += k * i; // k, k + k, k + k + k, ...
    }
}

document.getElementById("par_saida").innerHTML = "Soma dos  " + n + " primeiros múltiplos de " + k + "=" + soma;