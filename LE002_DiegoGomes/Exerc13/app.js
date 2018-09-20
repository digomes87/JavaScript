var n, somadiv, msg;

n = Number(prompt("Digite um numero para validar: "));

for (var i=0; i <=10; i++){

    somadiv = 0;
    for (var j=0; j <= (n-1); j++){
        if ((n % j) == 0){
            somadiv = somadiv + j;
        }
    }

    if (somadiv == n){
        msg = "é PERFEITO";
    } else{
        msg = "NÃO é um numero perfeito !!!"
    }
}

document.getElementById("numero").innerHTML = "Teu número: "+msg;