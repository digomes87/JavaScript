

    const ireland = ['Dublin','Galway','Cork'];

    //map funcao que pega o array e retorna um novo array apartir do primeiro
    const love = ireland.map(function(name) {

        //o formato ${variavelaqui} se chama template string
        return  `I love ${name} ! `;

    });


    const loveArrow = ireland.map((name) => {

        //o formato ${variavelaqui} se chama template string
        return  `I love ${name} ! `;

    });

    const loveArrowSingle = ireland.map(name => {

        //o formato ${variavelaqui} se chama template string
        return  `I love ${name} ! `;

    });

    const loveArrowOneLine = ireland.map(name =>  `I love ${name} ! `);

    const loveChain = ireland
                        .filter(name => name === 'Dublin')
                        .map(name =>  `I love ${name}!`);

    console.log(loveChain);
    console.log(love);