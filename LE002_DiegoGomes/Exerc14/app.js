/*
    Implemente um programa que leia um número inteiro N é informe se o número é primo ou não.
    Considera-se um número primo aquele que só divisível por 1 e por ele mesmo.

fiz uso de funcoes
*/


 function numero(num) {
        // verifica se o numero digitado não é primo
        if(num!=1){
            for (var i = 2; i < num; i++)
                if (num % i == 0) return false;
            return num !== 1;
        }
    }


function ePrimo() {
    var num = document.getElementById("name").value;
    var resl="";
    // verifica se é número
    if(!isNaN(num)){
        // verifica se é primo
        if (numero(num)) {
            resl = "O número " + (num) + " é primo";

        } else {
            resl = "O número " + (num) + " nao é primo";
        }
        document.getElementById("msg").innerHTML = resl;
    }

    else{
        document.getElementById("msg").innerHTML = "brodí !!!, nem número isso aí é !!";
    }
}
