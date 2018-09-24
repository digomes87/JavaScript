/*
    A proporção áurea (ou número de ouro) é uma constante real algébrica irracional denotada pela letra grega φ (phi) e
    com o valor arredondado a três casas decimais de 1,618. Possui um status quase mágico, pois pode ser encontrado na
    proporção em conchas, em tamanhos de partes do corpo de seres humanos (o tamanho das falanges, a altura do corpo e
    medida do umbigo até o chão, a medida da cintura até a cabeça e o tamanho do tórax, etc.), nas plantas
    (a proporção em que diminuem as folhas de uma árvore à medida que subimos de altura, proporção em que aumenta o
    diâmetro das espirais de sementes de um girassol); até na relação dos machos e fêmeas de qualquer colméia de abelhas do mundo,
    e em inúmeros outros exemplos que
*/

var c=0;
function calculando()
{
    var c=prompt("Digite um Numero:","exe: 10");
    if (c>0)
    {
        var Pi=0;
        var n=1;
        for (i=0;i<=c;i++)
        {
            Pi=Pi+(4/n)-(4/(n+2))
            n=n+4
        }
        alert(Pi);
    }
    else
    {
        alert("Não, não, não, Isso esta errado !!!: Tem que ser um numero inteiro positivo.");
    }
}
calculando();