/* 6. Assinale a opção correta:5 ? 5 ? 5 ? 5
     a) + = –
     b) + + =
     c) = + +
     d) x ÷ =
     e) – x =
*/


var resposta;
resposta = prompt("Assinale a Alternativa Correta: 5 ? 5 ? 5 ? 5 \n a) + = – \n b) + + =  \n c) = + +  \n d) x ÷ =  \n e) – x =" );


if ((resposta == 'b') || (resposta == 'B'))
  resposta = ("Parabéns, acertou");
else
  resposta = ("Opsss, Tente Novamente !");


document.getElementById("resposta").innerHTML =  resposta;
