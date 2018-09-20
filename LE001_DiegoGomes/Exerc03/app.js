 pergunta = "Os números da sequência abaixo seguem uma ordem. Por ela, que número deve ocupar o lugar do ponto de interrogação?  0 1 1 2 3 5 8 13 ? 34";

 document.getElementById("pergunta").innerHTML = pergunta;

 var resposta;

 alert("Os números da sequência abaixo seguem uma ordem. Por ela, que número deve ocupar o lugar do ponto de interrogação? <br>  0 1 1 2 3 5 8 13 ? 34");

 resposta = prompt("Resposta: ");


 if (resposta == 21)
    document.getElementById("resposta").innerHTML = "Parabéns Acertou !";
 else
   document.getElementById("resposta").innerHTML = "Ops, Tente Novamente";
