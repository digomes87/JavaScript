/*
Codifique um programa que leia um número inteiro N e escreve todos os termos da série E. A sérieEédadapor 1 1 1 1 1 ... 1. Considereosímbolo!ofatorialdeseu
     1! 2! 3! 4! N!
valor precedente, sendo por convenção 0! = 1! = 1 e n! = n * (n -1)*(n-2)*...*1.
 */
var n = 1,
    e = 0,
    x = 0,
    ft = 0,
    show = "",
    fti = 0,
    i = 0;

e = Number(prompt("Quantos números na série?"));

fti = n;

for(i = e; i >= 0; i--){
    
    for(x = fti; x > 0; x){
        
        ft = 1 / (x * x--);
        
        x--;
        
        show += ", " + ft;
    }
    
    fti++;
}

document.getElementById("par_saida").innerHTML = "Sua sequência é: " + show;