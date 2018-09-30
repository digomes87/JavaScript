//Tribonacci

var n1 = 0,
    n2 = 0,
    n3 = 1,
    nf = 0,
    n = 0,
    x = 0,
    mostra = "";

n = Number(prompt("Número de termos da sequência de Tribonacci"));

mostra += " " + n3;

for(x = n - 1; x > 0; x--){
    nf = n1 + n2 + n3;
    
    mostra += " " + nf;
    
    n1 = n2;
    n2 = n3;
    n3 = nf;
}

document.getElementById("par_saida").innerHTML = "A sequencia de Tribonacci para o Termo " + n + " é: " + mostra;