function criptografar(mensagem, chave) {
    let resultado = "";

    for (let c = 0; c < mensagem.length; c++) {
        let caractere = mensagem[c];
        chave = Number(chave);

        if (caractere.match(/[a-z]/i)) { 
            let base = caractere === caractere.toUpperCase() ? 65 : 97;
            let codigo = caractere.charCodeAt(0); 

            let deslocamento = ((codigo - base + chave) % 26 + 26) % 26
            let letra_deslocada = String.fromCharCode(base + deslocamento);
            resultado += letra_deslocada;

} else if (caractere.match(/[áéíóúÁÉÍÓÚâêîôûÂÊÎÔÛ]/)) {
    let grupos = {
        "áéíóúÁÉÍÓÚ": 5,
        "âêîôûÂÊÎÔÛ": 5
    };

    for (let acentuadas in grupos) {
        let index = acentuadas.indexOf(caractere);
        if (index !== -1) {
            let baseIndex = ((index % 5 + chave) % 5 + 5) % 5;
            let deslocado = acentuadas[index < 5 ? baseIndex : baseIndex + 5];
            resultado += deslocado;
            break;
        }
    }
}
        else { 
            resultado += caractere;
        }
    }
    return resultado;
}

function descriptografar(mensagem, chave){
    let mensagem_descriptografada = criptografar(mensagem, -chave)
    return mensagem_descriptografada
}

