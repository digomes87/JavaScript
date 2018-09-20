/*
Faça um algoritmo que, dada a idade de um competidor de natação, classifique-o em uma das categorias abaixo:
■ infantil A = de 5 à 7 anos;
■ infantil B = de 8 à 10 anos;
■ juvenil A = de 11 à 13 anos;
  juvenil B = de 14 à 17 anos;
■ adulto = maiores que 18 anos completos;
■ sênior = maiores que 60 anos.
*/

var idade;


idade = Number(prompt("Digite a idade do Competidor: "));

if ((idade >= 5) && (idade <= 7)){
    document.getElementById("par_saida").innerHTML = "Categoria infantil A = de 5 à 7 anos";
}

if ((idade >= 8) && (idade <= 10)){
    document.getElementById("par_saida").innerHTML = "Categoria infantil B = de 8 à 10 anos";
}

if ((idade >= 11) && (idade <= 13)){
    document.getElementById("par_saida").innerHTML = "Categoria juvenil A = de 11 à 13 anos";
}

if ((idade >= 14) && (idade <= 17)){
    document.getElementById("par_saida").innerHTML = "Categoria juvenil B = de 14 à 17 anos";
}

if ((idade >= 18) && (idade < 60)){
    document.getElementById("par_saida").innerHTML = "Categoria adulto = maiores que 18 anos completos";
}

if (idade >= 60){
    document.getElementById("par_saida").innerHTML = "Categoria sênior = maiores que 60 anos";
}