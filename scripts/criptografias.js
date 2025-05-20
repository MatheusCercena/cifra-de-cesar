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
                let grupos = ["áéíóú","ÁÉÍÓÚ","âêîôû","ÂÊÎÔÛ"];

                for (let letras of grupos) {
                    let index = letras.indexOf(caractere);
                    if (index !== -1) {
                        let novoIndex = (index + chave) % 5;
                        novoIndex = (novoIndex + 5) % 5;
                        resultado += letras[novoIndex];
                        break; // 👈 evita continuar iterando sem necessidade
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

