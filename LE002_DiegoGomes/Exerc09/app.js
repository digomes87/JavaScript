/*
    Um número Tribonacci assemelha-se a um número de Fibonacci, mas em vez de iniciar com dois termos pré-definidos,
        a sequência é iniciada com três termos pré-determinados, e cada termo posterior é a soma dos três termos precedentes.
    Os primeiros termos de uma pequena sequência Tribonacci
        são: 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317,...
        Faça um programa que lê um inteiro n e mostre os n termos da sequencia Tribonacci.
*/

var num;

num = Number(prompt("Digite um numero: "));

function tribonacci(tri,n){
    var fib = [];
    if(n==0){
        return [];
    }else if(n<tri.length){
        for(i=0;i<n;i++){
            fib[i] = tri[i];
        }
        return fib;
    }else{
        switch(tri.length){
            case 1:
                tri.push(tri[0], tri[0]);
                for(i=3;i<n;i++){
                    tri[i] = tri[i-1] + tri[i-2] + tri[i-3];
                }
                break;
            case 2:
                tri.push(tri[0]);
                for(i=3;i<n;i++){
                    tri[i] = tri[i-1] + tri[i-2] + tri[i-3];
                }
                break;
            default:
                for(i=tri.length;i<n;i++){
                    tri[i] = tri[i-1] + tri[i-2] + tri[i-3];
                }
        }
        return tri;
    }
}
document.getElementById("tribonacci").innerHTML = tribonacci([2], num);
