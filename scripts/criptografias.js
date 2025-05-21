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
    const grupos = {
        minusculas1: "áéíóú",
        maiusculas1: "ÁÉÍÓÚ",
        minusculas2: "âêîôû",
        maiusculas2: "ÂÊÎÔÛ"
    };

    for (let grupo in grupos) {
        let letras = grupos[grupo];
        let index = letras.indexOf(caractere);
        if (index !== -1) {
            let novoIndex = (index + chave) % 5;
            novoIndex = (novoIndex + 5) % 5; // garante índice positivo
            resultado += letras[novoIndex];
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

