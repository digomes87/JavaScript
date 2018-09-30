//Tipo de Triangulo


var l1=0,
    l2=0,
    l3=0,
    tipo;

alert("Iremos Validar o Tipo de Triângulo");
l1 = Number(prompt("Digite um numero para o Lado 1"));
l2 = Number(prompt("Digite um numero para o Lado 2"));
l3 = Number(prompt("Digite um numero para o Lado 3"));


if ((l1 == l2)&&(l2 == l3)){
    alert("Triângulo Equilátero, os três lados sao iguais ");
}else if((l1 == l2)|| (l2 == l3)){
    alert("Triângulo Isóceles");
}else{
    alert("Traiangulo Escaleno");
}

