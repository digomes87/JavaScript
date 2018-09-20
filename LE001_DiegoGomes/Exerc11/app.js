/*
Determine o resultado lógico (true ou false) das expressões mencionadas a seguir.
Considere para as respostas os seguintes valores: X = 1, A = 3, B = 5, C = 8 e D = 7.

a) !(X > 3)
b) (X < 1) && (!( B > D ))
c) (!(D < 0)) && (C > 5)
d) (!(X > 3)) || (C < 7) e) (A > B) || (C > B)
f) X >= 2 && A > X
g) (X < 1) && (B >= D) h) (D < 0) || (C > 5)
i) !(D > 3) || (!(B < 7)) j) (A > B) || (!( C > B))
*/

var a, b, c, d, f, g, i;

alert("Considere para as respostas os seguintes valores: X = 1, A = 3, B = 5, C = 8 e D = 7 \n Responda com V ou F ");

a = prompt("!(X > 3)");

if ((a == 'v') || (a == 'V'))
    alert("Certa Resposta");
else
    alert("OPss, tente Novamente");

b = prompt("(X < 1) && (!( B > D ))");

if ((b == 'f') || (b == 'F'))
    alert("Certa Resposta");
else
    alert("Opss, tente novamente");

c = prompt("(!(D < 0)) && (C > 5)");

if ((c == 'f') || (c == 'F'))
    alert("Certa Resposta");
else
    alert("Opss, tente novamente");


d = prompt("(!(X > 3)) || (C < 7)");
if ((d == 'v') || (d == 'V'))
    alert("Certa Resposta")
else
    alert("OPss, tente novamente");

f = prompt("X >= 2 && A > X");

if ((f == 'f') || (f == 'F'))
    alert("Certa resposta");
else
    alert("Opss, tente novamente");

g = prompt("(X < 1) && (B >= D)");

if ((g == 'f') || (g == 'F'))
    alert("Certa Resposta");
else
    alert("OPss, tente novamente");

i = prompt(" !(D > 3) || (!(B < 7)) j) (A > B) || (!( C > B))");

if ((i == 'f') || (i == 'F'))
    alert("Certa Resposta");
else
    alert("Opss, tente novamente");