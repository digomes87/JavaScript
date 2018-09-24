var salario = 0,
    reajuste = 0,
    salarioF = 0;

salario = Number(prompt("Digite seu salario"));

if (salario < 945) {
    reajuste = (salario * 25) / 100;
}
else if ((salario >= 945) || (salario > 1025)) {
    reajuste = (salario * 10) / 100;
}
else (salario >= 1025)
{
    reajuste = (salario * 3) / 100;
}
salarioF = salario+reajuste
document.getElementById("reajuste").innerHTML = "reajuste de " + reajuste + " Salario final: "+ salarioF;
