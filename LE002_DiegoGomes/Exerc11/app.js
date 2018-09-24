/*
. Uma companhia de pulverização utiliza aviões para pulverizar lavouras. Os custos de pulverização dependem do tipo de praga e da área contratada, conforme o esquema:
● Tipo 1: pulverização contra ervas daninhas, R$ 50,00 por acre;
● Tipo 2: pulverização contra gafanhotos, R$ 100,00 por acre;
● Tipo 3: pulverização contra broca, R$ 150,00 por acre ;
● Tipo 4: pulverização contra tudo acima, R$ 250,00 por acre.
Se a área a ser pulverizada é maior que 100 acres, o fazendeiro recebe um desconto de 10%. Em adição,
qualquer fazendeiro cujo custo ultrapasse R$ 10000,00 recebe um desconto de 12% sobre o valor que ultrapassar R$ 10000,00. Se ambos os descontos se aplicam,
 aquele relacionado a área é calculado em primeiro lugar. Preparar um programa que leia uma série de dados contendo as informações:
 Número de inscrição do fazendeiro, tipo de pulverização (código de 1 a 4) e a área a ser pulverizada (inteiro).
*/

var n = 1,
    e = 0,
    x = 0,
    ft = 0,
    show = "",
    fti = 0,
    i = 0;

e = Number(prompt("Quantidade de numeros na series? "));
fti = n;

for (i = e; i >=0; i--){
    for (x = fti; x > 0; x){
        ft = 1 / (x * x--);
        x--;

        show += ","+ ft;
    }
    fti++;
}


document.getElementById("par_saida").innerHTML = "Sequencia  encontrada: " +show;