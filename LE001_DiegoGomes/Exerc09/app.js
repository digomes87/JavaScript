/*
  Dada a expressão Y = X*4 + 6/Z.
  Qual será o valor da variável Y após a execução desta operação se a variável X contiver 5 e a variável Z contiver 2?
  Qual deveria ser o tipo da variável Y? E se Z contiver 5, qual seria o resultado e o tipo da variável Y?

*/


var resposta;

alert("Dada a expressão Y = X*4 + 6/Z. \n "+
      "Qual será o valor da variável Y após a execução desta operação se a variável X contiver 5 e a variável Z contiver 2? \n"+
      "Qual deveria ser o tipo da variável Y? E se Z contiver 5, qual seria o resultado e o tipo da variável Y?"
);


resposta = Number(prompt("Resposta: "));

if (resposta == 23)
    document.getElementById("resposta").innerHTML = "Parabéns, Acertou";
else
    document.getElementById("resposta").innerHTML = "Opss, Tente Novamente";
