//Numeros amigos
var n,
    m,
    somaM,
    somaN;


    n = Number(prompt("Digite um numero"));
    m = Number(prompt("Digite um numero"));

    for(var i = 0; i < n; i++){
        if(n% i == 0)
            somaN+=i;
    }

    for(var i = 0; i <= m; i++){
        if(m % i == 0)
            somaM += i;
    }

    if((somaM == n) && (somaN == m))
        msg = "Sâo amigos";
    else{
        msg = "Nâo sao amigos";
    }

document.getElementById("saida").innerHTML = msg;