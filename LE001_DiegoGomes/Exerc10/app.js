/*
  10. Existe diferença de resultado entre as expressões
    Y=X*(4+Y)
        e
    Y=X*4+Y?
*/

var pergunta;

pergunta = prompt("Existe diferença de resultado entre as expressões \n"+
      "Y=X*(4+Y) \n"+
      "e \n"+
      "Y=X*4+Y? \n\n" +
      "S = sim, N = nao"
);

if ((pergunta == 'sim') || (pergunta == 's') || (pergunta == 'S'))
    document.getElementById("resposta").innerHTML = "Certo, existe diferença";
else
    document.getElementById("resposta").innerHTML = "HUmmmm, Pense mais um pouco sobre";
