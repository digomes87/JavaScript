    //const nao pode ser reatribuida se for apenas uma variavel

    const numeroSecreto = 28;



    //mas se for um objeto seus atribuitos podems er modificados

    const objetoMuda = {
        name: 'Diego',
        age: 27
    };

    //se usar a linha a baixo nada no objeto irá mudar
    //Object.freeze(objetoMuda);

    objetoMuda.age = 26;
    objetoMuda.name = 'Diego Go'

    console.log(objetoMuda)