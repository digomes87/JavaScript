/*
  Dois amigos, A e B, conversaram sobre seus filhos. A dizia a B que tinha 3 filhas, quando B perguntou a idade das mesmas.
  Sabendo A que B gostava de problemas de aritmética, respondeu da seguinte forma:
  O produto das idades das minhas filhas é 36. B respondeu que os dados eram insuficientes.
  A então disse a soma de suas idades é o número daquela casa ali em frente”. B respondeu, novamente, que os dados eram insuficientes.
  A pensou um pouco e respondeu: “Tem razão. Esqueci-me de dizer que a mais velha tem olhos. azuis”.
  Com base nesses dados, B resolveu o problema. Pergunta-se: qual a idade das filhas de A?
*/


var resposta;

alert("Dois amigos, A e B, conversaram sobre seus filhos. A dizia a B que tinha 3 filhas, quando B perguntou a idade das mesmas.\n" +
      "Sabendo A que B gostava de problemas de aritmética, respondeu da seguinte forma: \n" +
      "O produto das idades das minhas filhas é 36. B respondeu que os dados eram insuficientes.\n" +
      "A então disse a soma de suas idades é o número daquela casa ali em frente”. B respondeu, novamente, que os dados eram insuficientes.\n" +
      "A pensou um pouco e respondeu: “Tem razão. Esqueci-me de dizer que a mais velha tem olhos. azuis.\n" +
      "Com base nesses dados, B resolveu o problema. Pergunta-se: qual a idade das filhas de A? \n" +

      "OBSERVE !: \n" +
      "Podemos observar que os homens estavam vendo o número da casa e que temos 8 possibilidades para que o produto das idades seja 36 que são"
    );

resposta = prompt("\nIDADES  | SOMA  \n" +
                  "A) 1,1,36 |   38  |\n" +
                  "B) 1,2,18 |   21  |\n" +
                  "C) 1,3,12 |   16  |\n" +
                  "D) 1,4,9  |   14  |\n" +
                  "E) 1,6,6  |   13  |\n" +
                  "F) 2,2,9  |   13  |\n" +
                  "G) 2,3,6  |   11  |\n" +
                  "H) 3,3,4  |   10  |\n"

);

if ((resposta == 'f') || (resposta == 'F'))
  document.getElementById("resposta").innerHTML = "Parabéns Acertou !";
else
  document.getElementById("resposta").innerHTML = "Opsss, tente novamente";
