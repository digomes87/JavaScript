/* Existem 3 grupos de indústria altamente poluidores
Indice aceitável varia de 0 a 0.25 miligramas po metro Cubico
se o indice sobre para 0.3 mg/m cubico as industrias do primeiro grupo  sao intimadas a suspender atividades
se cresce para 0.4 as do primeiro e segundo grupo sao intimadas a suspender
se o índice atingir 0.5 os três devem parar

*/

var indice=0,
    msg;

indice = Number(prompt("Sensor de Poluição ex: 0.3"));

if((indice == 0.3) && (indice < 0.4)){
    msg = "Grupo 1 deve paralizar as Atividades ";
}else if ((indice >=  0.4) && (indice < 0.5)){
    msg = "Grupo 1 e 2 devem paralisar as Atividades";
}else if ((indice >= 0.5)){
    mag = "Grupo 1,2 e 3 deve Paralisar as Atividades";
}else{
    msg = "Dentro dos padrôes aceitos";
}

document.getElementById("saida").innerHTML = msg;