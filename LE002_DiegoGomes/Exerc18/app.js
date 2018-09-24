/*
    Feito com ajudo do colega Gabriel
*/

var a = 0,
    b = 0,
    c = 0,
    cv = 0,
    i = 0,
    vb = 0,
    vt = 0,
    vtv = 0,
    vn = 0;

i = Number(prompt("Qual candidato deseja votar? A = 1; B = 2; C = 3; Voto em branco = 4; Voto nulo = 5."));

while (i != 0){
    switch(i){
        case 1:
            a++;
            break;

        case 2:
            b++;
            break;

        case 3:
            c++;
            break;

        case 4:
            vb++;
            break;

        case 5:
            vn++;
            break;
    }
    i = Number(prompt("Digite 0 para encerrar os votos, caso contrario, continue votando!"));
}

if((a > b) && (a > c)){
    cv = a;
}
else{
    if((b > a) && (b > c)){
        cv = b;
    }
    else{
        cv = c;
    }
}

vtv = a + b + c;
vt = vtv + vb + vn;

if((vb + vn) > a + b + c){
    alert("Eleição inválida! Existem mais votos brancos e nulos que votos válidos!");
}
else{
    if(cv < (vtv / 2)){
        alert("Será necessário um segundo turno!");
    }
    else{
        document.getElementById("par_saida").innerHTML = "Total de votos: " + vt + "</br>" + "Total de votos de cada candidato em ordem (a, b, c): " + a + ", " + b + ", " + c + "</br>" + "Total de votos (brancos e nulos em ordem): " + vb + ", " + vn + "</br>" + "Total de votos válidos: " + vtv + "</br>" + "Candidato ganhador: " + cv;
    }
}