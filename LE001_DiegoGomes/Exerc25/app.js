/*
Faça um algoritmo que leia as 4 notas de um aluno e calcule a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é: 2, 3, 1 e 4, respectivamente.
*/

var n1 = 2,
    n2 = 3,
    n3 = 1,
    n4 = 4,
    media;


alert(" Nota1: "+n1+"\n Nota2: "+n2+"\n Nota3: "+n3+"\n Nota4: "+n4);

media = (n1+n2+n3+n4)/4;
document.getElementById("par_saida").innerText = "Media podenrada: "+media;
