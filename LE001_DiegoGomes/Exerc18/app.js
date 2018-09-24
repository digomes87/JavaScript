/*
 Leia duas variáveis quaisquer. Mostre seu conteúdo. Elabore um algoritmo para trocar o conteúdo das duas.
 É possível fazer a troca sem usar uma terceira variável auxiliar?
*/


var a, b;

a = Number(prompt("Informe um numero para A: "));
b = Number(prompt("Informe um numero para B: "));

alert("Variavel A possui: "+a);
alert("Variavel B possui: "+b);

alert("Aqui iremos trocar os valores de A e B sem uma terceira varialvel");

// a = a + b
// b = a - b
// a = a - b

//ES6 ja facilita a vida pra fazer o xor
[a,b] = [b,a]

alert("Agora Valor de A: "+a);
alert("Agora valor de B: "+b);

/*
    Metodo utilizado é bem conhecido como algoritmo de XOR, implica em somar os valores e subtrair em uma conta simples.
*/