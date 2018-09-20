/*
Escrever um algoritmo que lê a hora de início de um jogo e a hora de término de tal jogo,
ambas subdivididas em 2 valores distintos, a saber: horas e minutos.
Calcular e escrever a duração do jogo, também em horas e minutos, considerando que o
tempo máximo de duração de um jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte
*/

var
    di,df,hi, mi, hf, mf, hd, md, dd;
hi = Number(prompt("Digite a Hora de Inicio do Jogo: ex: 12"));
mi = Number(prompt("Digite os minutos: 23 "));
hf = Number(prompt("Hora que terminou o jogo: ex 13"));
mf = Number(prompt("Minuto Final: ex 55"));
di = Number(prompt("Dia de Inicio do jogo: ex 15"));
df = Number(prompt("Dia que o jogo Terminou: ex 18"));

hd = hf - hi;
md = mf - mi;

if (hd < 0){
    hd = hd + 24;
}

if (md < 0){
    md = md + 60;
    hd = hd - 1;
}

if (df > di){
    dd = df - di;
}else{
    alert("Um jogo não pode começar no futuro e terminas no passado ou presente !");
}

document.getElementById("par_saida").innerHTML = "Jogo Durou: " +hd+":"+md+" e Durou: entre os"+dd+" Dias";
