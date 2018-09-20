var a = 0,
    b = 0,
    c = 0,
    delta = 0,
    raiz01 = 0.0,
    raiz02 = 0.0;

a = Number(prompt("Digite o valor do coeficiente a ?"));

if (a == 0){
    alert("Digito deve ser diferente");
}else{
    b = Number(prompt("Digite o valor do coeficiente B ?"));
    c = Number(prompt("Digite o valor do coeficiente C ?"));

    if ((b == 0) || (c == 0))
        alert("Erro isso não é uma resolução de segundo grau");
    else{
        //Calculo do delta
        delta = b * b - 4 * a * c;

        if (delta < 0)
            alert("Nâo possui raizes reais");
        else{
            raiz01 = (-b + Math.sqrt(delta)) / (2 * a);
            raiz02 = (-b - Math.sqrt(delta)) / (2 * a);

            document.getElementById("resultado").innerHTML = "Calculo efetuado com Sucesso: Raiz1:" + raiz01 + "Raiz2" + raiz02;
        }
    }

}

