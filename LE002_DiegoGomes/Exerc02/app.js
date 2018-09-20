/*
Efetuar a leitura de n números inteiros positivos quaisquer, termiando a leitura quando for informado o valor -1.
Ao término da leitura, mostrar o maior e o menor dos valores informados. Não é necessário executar a ordenação. O valor -1 não deve ser considerado.
*/


// Variáveis necessárias
var maior = 0,
    menor = 0,
    valor = 0;

// Loop para ler valores até que seja informado -1
while (valor != -1){
    valor = Number(prompt("Informe um valor (-1 termina):"));

    // Considerar apenas o inteiros positivos
    // Aqui estamos considerando zero neutro
    // ou seja, nem positivo nem negativo
    // logo os positivos seriam os maiores que zero
    if (valor > 0) {
        if ((valor < menor) ||
            (menor == 0))
            menor = valor;

        if (valor > maior)
            maior = valor;
    }
}

// Apresenta os valores no documento html, elemento par_saida
document.getElementById("par_saida").innerHTML = "Maior valor: " + maior + "<br>" + "Menor valor: " + menor;