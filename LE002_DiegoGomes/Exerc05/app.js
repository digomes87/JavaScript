/*
    ASCII (American Standard Code for Information Interchange) é uma codificação de caracteres (em sete bits)
    desenvolvida para o alfabeto da língua inglesa, em 1960. Cada sequência de códigos na tabela ASCII corresponde a um caractere,
    comumente representados pelos 8 bits (equivalente a um byte), sendo 1 bit de paridade. Criados em 1960, originalmente para códigos de telégrafo,
    os códigos ASCII representam texto em computadores, equipamentos de comunicação, entre outros dispositivos que trabalham com texto.
    Devido às suas limitações, a ASCII foi substituída pelo padrão de codificação Unicode (1991), que a incorpora.

    Faça um programa que exibe três opções:
    [1] para exibir a tabela ASCII, (https://br.ccm.net/contents/54-o-codigo-ascii) 0 -> 127
    [2] para exibir a tabela ASCII estendida, inicio 128 -> 255
    [3] para exibir a ASCII completa e (https://www.ricardoarrigoni.com.br/tabela-ascii-completa/) 0 -> 255
    [4] finaliza o programa. Se uma opção inválida for informada, mostre uma mensagem de erro e leia novamente.

    Dica: Considere o método estático String.fromCharCode(). Exemplo: String.fromCharCode(65); // retorna “A”

    Fonte usada: https://www.ascii-code.com
*/

var choose;

alert("Vamos listar 4 opções de exibitação da tabela ASCII\n");
choose = Number(prompt("\n[1] para exibir a tabela ASCII \n [2] para exibir a tabela ASCII estendida \n [3] para exibir a ASCII completa \n [4] Finaliza o Programa"));

switch(choose){
    case 1:
        document.write("TABELA ASCII");
        document.write("<table border=1>");
        document.write("<tr><td>caracter</td><td>decimal</td><td>octal</td><td>hexadecimal</td><td>binario</td></tr>");
            for (decimal = 0;  decimal<=127; decimal++){
                document.write("<tr><td>",String.fromCharCode(decimal),"</td>");
                document.write("<td>",decimal,"</td>");
                document.write("<td>",decimal.toString(8),"</td>");
                document.write("<td>",decimal.toString(16),"</td>");
                document.write("<td>",decimal.toString(2),"</td></tr>");
            }
            break;

    case 2:
        document.write("TABELA ASCII Estendida");
        document.write("<table border=1>");
        document.write("<tr><td>caracter</td><td>decimal</td><td>octal</td><td>hexadecimal</td><td>binario</td></tr>");
            for (decimal = 128; decimal<=255; decimal++){
                document.write("<tr><td>",String.fromCharCode(decimal),"</td>");
                document.write("<td>",decimal,"</td>");
                document.write("<td>",decimal.toString(8),"</td>");
                document.write("<td>",decimal.toString(16),"</td>");
                document.write("<td>",decimal.toString(2),"</td></tr>");
            }
            break;
    case 3:
        document.write("TABELA ASCII Completa");
        document.write("<table border=1>");
        document.write("<tr><td>caracter</td><td>decimal</td><td>octal</td><td>hexadecimal</td><td>binario</td></tr>");
        for (decimal = 0; decimal <= 255; decimal++) {
            document.write("<tr><td>", String.fromCharCode(decimal), "</td>");
            document.write("<td>", decimal, "</td>");
            document.write("<td>", decimal.toString(8), "</td>");
            document.write("<td>", decimal.toString(16), "</td>");
            document.write("<td>", decimal.toString(2), "</td></tr>");
        }
        break;

    case 4:
    
        document.write("Fecho, já Erra, Programa Encerrado !!");
        break;
    
    default:
        document.write("<img src='http://www.museudememes.com.br/wp-content/uploads/2018/03/29715197_1951464238500504_5405884114941247488_n.jpg' height='600' width='600'>");    
        break;
}
document.write("</table>");
