/*
Existe um método conhecido como Babilônico para encontrar a aproximação da raiz quadrada de um número.
Faça um programa que leia um inteiro n e mostre a raiz quadrada desse número aproximada pelo método Babilônico.
Abaixo um exemplo de aplicação do método.

Digamos que se queira extrair a raiz quadrada de 66. Vamos executar 5 passos.

Passo 1. Ache o quadrado perfeito que mais se aproxima do número.
         Nesse caso o quadrado que mais se aproxima é 64.
         Usa-se sempre o quadrado menor que o número procurado, mesmo que o quadrado maior seja mais próximo.

                 52=25
                 62=36
                 72=49
                 82=64
                 92=81

Passo 2. Extraia a raiz quadrada do quadrado que mais se aproximou.
         A raiz quadrada de 64 é 8. Nesse exemplo, chamaremos 8 de A.

Passo 3. Divida o número original por A. Chamaremos o resultado de B. B =66 / A = 66/8 = 8,2
Passo 4. Somamos A com B e dividimos por 2. Esse número chamaremos de C.
            C = (8 + 8,2) / 2 = 16,2 / 2 = 8,1
         Agora dividimos o número original (nesse caso 66) por C até que se tenha o dobro de casas decimais de C.
         O resultado chamaremos de D.
            D = 66 / 8,1 = 8,148
Passo 5. Somamos C e D e dividimos por 2. Tal número chamaremos de E, que é igual a 8,124, ou seja, já é uma boa aproximação da raiz.
         Na calculadora, encontraríamos = 8,12403840463596.
 */

var n = 0,
    a = 1,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    decimais_d = "",
    decimais_c = "";

n = Number(prompt("Digite um Número:"));

while (a * a <= n){
    a++;
}
a--;

b = n / a;
c = (a + b) / 2;
decimais_c = String(c);
decimais_c = decimais_c.substr(decimais_c.indexOf(".")+ 1);

d = n / c;

decimais_d = String(d);
if (decimais_d.indexOf(".") != -1){
    decimais_d = decimais_d.substr(decimais_d.indexOf(".")+ 1);
    
    while (decimais_d.length <= decimais_c.length * 2){
        d = n / c;
        decimais_d = String(d);
        decimais_d = decimais_d.substr(decimais_d.indexOf(".")+ 1);
    }
}
e = (c + d) / 2;
document.getElementById("par_saida").innerHTML = "A raiz: "+n+ " e: "+e;