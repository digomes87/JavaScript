
var msg = "**";

function ehAgora(nome){
    if(nome == 'Diego'){
        msg = `eu ${nome} Vou ter que dar o braço a torcer pra Mycrosoft ???? `;
    }else{
        msg =`Ainda bem que não sou o Diego !`;
    }
    return  msg;
}    


ehAgora('Diego');
document.getElementById("saida").innerHTML = msg;