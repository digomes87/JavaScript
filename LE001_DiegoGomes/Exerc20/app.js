/*
Faça um algoritmo para ler o total de uma compra ea forma de pagamento:
(C)cartãoe (D) dinheiro-cheque.
Apresentar na saída o valor a pagar.
Observação: se o pagamento for com cartão deverá ter um acréscimo de 2,5%, caso contrário o valor permanece o mesmo.
 */

var pagamento,
    compra,
    taxa;

compra = 425;

alert("Valor da Sua compra: "+compra+" RS");

pagamento = Number(prompt("Deseja pagar com Cartão 1 ou cheque 2"));

switch (pagamento) {
    case 1:
        taxa = (compra*25)/100;
        compra = compra+taxa;
        document.getElementById("resposta").innerHTML = "Pagamento no cartão possui taxa de 2,5 em cima da compra, total taxa: "+ taxa + "<br>Valor Final: "+compra;
        break;

    case 2:
        document.getElementById("resposta").innerHTML = "Compra paga com Cheque, valor: " +compra+ "<br>Volte sempre!";
        break;

    default:
        alert("Valor digita fora das alternativas disponiveis ! Tente Novamente");
        break;
}
