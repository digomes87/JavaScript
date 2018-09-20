/*
Escrever um algoritmo que calcula o Imposto de Renda (IR) anual de um contribuinte pessoa física.
O usuário deve informar, além do CPF, os seguintes valores reais:
 o rendimento bruto tributável recebido no ano;
 o total de deduções a que tem direito;
 o valor de IR retido na fonte, já pago durante o ano.


Como resposta, o programa deve escrever uma das frases abaixo:
 Imposto a pagar: <valor em reais e centavos>
 Imposto a restituir: <valor em reais e centavos>
O valor do cálculo do IR usa a tabela progressiva divulgada pela Receita Federal, que em 2018, ano base 2017, é a seguinte:

Base de cálculo mensal em R$ Alíquota %
Até 1.903,98                   -
De 1.903,99 até 2.826,65       7,5
De 2.826,66 até 3.751,05       15,0
De 3.751,06 até 4.664,68       22,5
Acima de 4.664,68              27,5

Do total de rendimento bruto tributável deve ser subtraído o total de deduções.
Esse montante resultante deve ser dividido por 12 para obter a base de cálculo mensal.
A alíquota a ser aplicada para calcular o percentual de imposto a pagar, conforme a base mensal, está na tabela acima.
Do imposto calculado deve-se subtrair o valor do imposto retido na fonte.
Caso resulte em um valor negativo, há imposto a restituir. Se for um valor positivo, há imposto a pagar.
*/


var cpf,
    rendimentoBruto = 0.0,
    valorRetido = 0.0,
    deducaoDireito  = 0.0,
    rendaCalculada = 0.0;

cpf = Number(prompt("Informe seu cpf"));
rendimentoBruto = Number(prompt("Rendimento Bruto recebido por ANO: "));
deducaoDireito = Number(prompt("Total deduções que têm direito: "));
valorRetido = Number(prompt("Valor retido em fonte: "));

rendaCalculada = ((rendimentoBruto - deducaoDireito) / 12);

if (rendaCalculada <= 1903.98){

    rendaCalculada = rendaCalculada;

}else{
    if ((rendaCalculada >= 1903.99) && (rendaCalculada <= 2826.65)){

        rendaCalculada = (rendaCalculada * 0.075) + rendaCalculada;

    }else{
        if ((rendaCalculada >= 3751.06) && (rendaCalculada <= 4464.68)){

            rendaCalculada = (rendaCalculada * 0.225) + rendaCalculada;

        }else{
            if (rendaCalculada > 4464.68){
                rendaCalculada = (rendaCalculada * 0.275)+ rendaCalculada;
            }
        }
    }
}

if (rendaCalculada < 0){
    rendaCalculada = rendaCalculada * (-1);
    document.getElementById("par_saida").innerHTML =  "Importo a restituir: "+rendaCalculada.toFixed(2);

}else{
    document.getElementById("par_saida").innerHTML = "Imposto a Pagar: "+rendaCalculada.toFixed(2);
}