/*
    Leonardo Pisano Bogollo (1170-1250), conhecido como Fibonacci, foi um dos mais talentosos matemáticos da Idade Média.
    Introduziu os algarismos árabes na Europa e criou a Sequencia de Fibonacci.
    A Sequência de Fibonacci consiste em uma sucessão de números, tais que, definindo os dois primeiros números da sequência como 0 e 1,
    os números seguintes serão obtidos por meio da soma dos seus dois antecessores. Portanto, os números são: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,...
    Os números de Fibonacci têm várias aplicações na matemática (como a razão áurea) e também em outros campos.
    Na música os números de Fibonacci são utilizados para a afinação, tal como nas artes visuais, para determinar proporções entre elementos formais.
    Também aparece na Economia. Em “The Wave Principle” (1938) ,
        Ralph Nelson Elliott (1871-1948) defende a teoria de que as flutuações do mercado seguem um padrão de crescimento e decrescimento
        que pode ser analisado segundo os números de Fibonacci, uma vez determinada a escala de observação.
    As relações entre picos e vales do gráfico da flutuação de bolsa tendem a seguir razões numéricas aproximadas das razões de dois
        números consecutivos da sequência de Fibonacci.

    Faça um programa que lê um inteiro positivo n e mostra n termos da série de Fibonacci. Abaixo a definição matemática da sequência.

*/

function fibonacci(quadro,texto)
{
    var numero = 0;
    var proximo_numero = 1;
    var auxiliar;
    quadro.value = "";

    while ( numero <= texto.value )
    {
        quadro.value += numero+", ";
        auxiliar = proximo_numero;
        proximo_numero = proximo_numero + numero;
        numero = auxiliar;
    }
}
