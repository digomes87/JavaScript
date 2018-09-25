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

var i = 0,
    acre = 0,
    desconto = 0,
    codigo = 0,
    cacre = 0;

codigo = Number(prompt("Codigo do fazendeiro"));

while(codigo != 9999){
    
    acre = Number(prompt("Quantos acres?"));
    i = Number(prompt("1 = 50 per acre; 2 = 100 per acre; 3 = 150 per acre; 4 = 250 per acre"));
    
    switch(i){
        case 1:
            cacre = acre * 50;
            break;
        case 2:
            cacre = acre * 100;
            break;
        case 3:
            cacre = acre * 150;
            break;
        case 4:
            cacre = acre * 250;
            break;
    }
    if(acre > 100)
        desconto = cacre - ((10/100) * cacre);
    
    if(desconto > 10000)
        desconto = desconto - ((12/100) * desconto);
    
    document.getElementById("par_saida").innerHTML = desconto + " Codigo: " + codigo;
    
    codigo = Number(prompt("Codigo 9999 para encerrar a operação; Caso contrario insira o codigo do fazendeiro novamente.")); 
}
