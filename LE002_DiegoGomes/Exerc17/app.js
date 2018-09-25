/**
 * 
 * Funcao para validar se é palindro ou Não
 */
var pergunta = prompt("digite um valor ex: 1771 ou uma palavra: ");

function verificaPolindromo(valorInserido){

    var valorinvertido = valorInserido.split('').reverse().join('');
        if (valorInserido == valorinvertido){
            alert(valorInserido + " é um políndromo");
        }else{
            alert(valorInserido + " Não é um políndromo.")
        }
}

verificaPolindromo(pergunta);