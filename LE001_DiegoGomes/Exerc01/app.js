
texto = "Um pastor beduíno diz para outro: Dê um de seus carneiros que ficamos com igual número de carneiros. O outro responde: Nada disso, dê-me você um de seus carneiros que ficarei com o dobro dos seus. Quantos carneiros têm cada um?";

document.getElementById("texto").innerHTML = texto;

var pastorX, pastory;

alert("Um pastor beduíno diz para outro: Dê um de seus carneiros que ficamos com igual número de carneiros. O outro responde: Nada disso, dê-me você um de seus carneiros que ficarei com o dobro dos seus. Quantos carneiros têm cada um?");

pastorX = prompt("Quantos beduínos o PRIMEIRO têm? ");
pastory = prompt("Quantos beduínos o SEGUNDO têm")


if (pastorX == 5 && pastory == 7)
   document.getElementById("resposta").innerHTML = "Parabéns Acertou !";
else
  document.getElementById("resposta").innerHTML = "Tente Novamente";
