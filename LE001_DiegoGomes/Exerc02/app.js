
pergunta = "Três gatos comem três ratos em três minutos. Cem gatos comem cem ratos em quantos minutos?";

document.getElementById("pergunta").innerHTML = pergunta;

var resposta;

alert("Três gatos comem três ratos em três minutos. Cem gatos comem cem ratos em quantos minutos?");

resposta = prompt("Resposta, minutos total por favor, exemplo 180: ");


if (resposta == 90)
   document.getElementById("resposta").innerHTML = "Parabéns Acertou !";
else
  document.getElementById("resposta").innerHTML = "Ops, Tente Novamente";
