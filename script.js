let mensagem = document.getElementById("mensagem");

const emailBase = "admin@email.com"
const senhaBase = "Admin123"

function validar() {
    const email = document.getElementById("email")?.value;
    const senha = document.getElementById("senha")?.value;

    
    let imgBotao = document.getElementById("imgBotao");
    let textoBotao = document.getElementById("textoBotao");

    let msgEmail = validaEmail(email);
    
    let msgSenha = validaSenha(senha);

    if (msgEmail) {
        mensagem.innerText = msgEmail;
        return;
    }

    if (msgSenha) {
        mensagem.innerText = msgSenha;
        return;
    }

    mensagem.innerText = "";

    if (email === emailBase && senha === senhaBase) {
        textoBotao.innerText = "Carregando...";
        imgBotao.src = "./assets/carregando.gif";

        setTimeout(() => {
            window.location.href = "https://pudim.com/";
        }, 3000)
        
    } else {
        mensagem.innerText = "Usuário ou senha incorreto(s)!"
    }
}

function validaEmail(email) {
    if (email === ""){

        return "Email não pode ser vazio!";
    }

    if (email.length < 10){

        return "Email tem que ter pelo menos 10 caracteres!";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        return "Formato de email inválido!";
    }

    return null;
}


function validaSenha(senha) {
    if (senha === ''){
        return "Senha não pode estar vazia!"
    }

    if (senha.length < 8){
        return "Senha tem que ter pelo menos 8 caracteres!"
    }

    const temNumero = /\d/;
    const temMaiuscula = /[A-Z]/;
    const temMinuscula = /[a-z]/;

    if (!temNumero.test(senha)) {
        return "A senha precisa conter pelo menos 1 número!";
    }

    if (!temMaiuscula.test(senha)) {
        return "A senha precisa conter pelo menos 1 letra maiúscula!";
    }

    if (!temMinuscula.test(senha)) {
        return "A senha precisa conter pelo menos 1 letra minúscula!";
    }
}

function ocultar() {
    const senha = document.getElementById("senha");
    const olho = document.getElementById("olho");

    const mostrando = senha.type === "text";

    senha.type = mostrando ? "password" : "text";
    olho.src = mostrando ? "./assets/olho.png" : "./assets/oculto.png";
}