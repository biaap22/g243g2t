const btn = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        window.location.href = "http://www.oul.com.br"
    }
})();

btn.onclick = (e) =>{
    e.preventDefault();
    let usuario = inputUsuario.value;
    let Senha = inputSenha.value;
    if(!usuario && !senha){
        inputUsuario.focus();
        return;
    }
    if(usuario === "Davantel e Bia"){
        if(senha === "1234"){
            localStorage.setItem("usuario",usuario);
            window.location.href = "http://www.oul.com.br"
        }else{
            inputUsuario.focus();
        }
    }
}