
/* variaveis criadas fora de funcçoes são variaveis globais, acessivel em qualquer lugar do codigo*/

    var animal = 'gato';
    console.log(animal)

    {
        /* let nao permite duas variaveis de mesmo nome
           Porem o let separa bem blocos, ou seja se existir uma variavel
            com o mesmo nome dentro de um bloco {} será permitido ter o mesmo nome de variavel*/
        let animal = 'cachorro';
        console.log(animal);
    }

    console.log(animal)