//Botão criptografar
botao_criptografar.addEventListener("click", function(){
    let mensagem = document.getElementById("mensagem").value 
    let chave = document.getElementById("chave").value 
    if(mensagem == ""){
        window.alert("Por favor digite uma mensagem!")
    } else{
        let mensagem_criptografada = criptografar(mensagem, chave)
        resultado.querySelector("h2").innerText = "🔒 Mensagem Criptografada:"
        resultado.querySelector("p").innerText = mensagem_criptografada
        resultado.classList.add("ativar")
        div_botao.style.display = "none"
        caixatexto.disabled = true
    }
})

//Botao descriptografar
botao_descriptografar.addEventListener("click", function(){
    let mensagem = document.getElementById("mensagem").value 
    let chave = document.getElementById("chave").value 
    if(mensagem == ""){
        window.alert("Por favor digite uma mensagem!")
    } else{
        let mensagem_descriptografada = descriptografar(mensagem, chave)
        resultado.querySelector("h2").innerText = "🔓 Mensagem Descriptografada:"
        resultado.querySelector("p").innerText = mensagem_descriptografada
        resultado.classList.add("ativar")
        div_botao.style.display = "none";
        caixatexto.disabled = true
    }
})

//Botão nova mensagem
botao_reload.addEventListener("click", function(){
    location.reload();
})

//Botão copiar
botao_copiar.addEventListener("click", function() {
    var temporario = document.createElement("textarea");
    temporario.value = resultado.querySelector("p").innerText;
    document.body.appendChild(temporario);
    temporario.select();
    document.execCommand("copy");
    document.body.removeChild(temporario);
    resultAdo.querySelector("p").innerText = "TEXTO COPIADO!!";
});


