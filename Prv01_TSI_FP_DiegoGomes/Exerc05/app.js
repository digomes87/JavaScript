
var num=0,
    c = 0,
    d = 0,
    u = 0;


num = Number(prompt("Digite um numero"));

if(num >=1000){
    document.getElementById("saida").innerHTML = "Apenas valores até 1000 são aceitos!";
}else{
    c = (num / 100);

    d = (num % 100) / 10;

    u = ((num % 100)%10);


    document.getElementById("saida").innerHTML = num+" = " +Math.floor(c)+" Centenas, "+Math.floor(d)+" Dezenas, "+Math.floor(u)+" Unidades";
}
