/*
Tendo como dados de entrada a altura e o sexo de uma pessoa (“M” masculino e “F” feminino),
construa um algoritmo que calcule seu peso ideal,
utilizando as seguintes fórmulas: para homens (72.7 * h) - 58 e para mulheres (62.1 * h) - 44.7
*/
var sexo,
    pesoIdeal,
    msg,
    altura;
alert("Responda com F de feminino ou M de Masculino");
sexo = prompt("Sexo: F ou M");

if ((sexo == 'F') || (sexo = 'f')){
    altura = Number(prompt("Digite Tua altura: ex 1.79"));
    pesoIdeal = parseFloat((62.1 * altura) - 44.7);

    msg = "Teu peso ideal é: "+pesoIdeal.toFixed(2);
}
else if ((sexo == 'M') || (sexo == 'm')){
    altura = Number(prompt("Digite tua altura: ex 1.50"));
    pesoIdeal = parseFloat((72.7 * altura) - 58);
    msg = "Teu peso Ideial é: "+pesoIdeal.toFixed(2);
}
else{
    msg = "Valor digitado incorreto ou fora da opções.";
}


document.getElementById("par_saida").innerHTML = msg;