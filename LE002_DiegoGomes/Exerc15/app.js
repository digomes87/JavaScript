
var quadrado,soma,grao;

    quadrado = 1;
    soma = quadrado;
    grao = 2;



while (quadrado < 64) {
    soma = soma + grao;
    quadrado = quadrado + 1;
    grao = grao * 2;
    alert("Quadrado: " + quadrado + " tem: " + grao + " Grãos");
    //document.getElementById("show").innerHTML = "Quadrado: " + quadrado + " tem: " + grao + " Grãos";

}