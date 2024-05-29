const btnAula1 = document.querySelector("#btnTeste");
const escreve = document.querySelector("textoHeader");
btnAula1.onclick = () =>{
    alert("Jesus é meu Best Friend!");
}
const nome = "Davantel e Beatriz!".split("");

const ecreveNome = (pos)=>{
    if(pos < nome.length){
        let saida = "";
        for(let i=0; i < nome.length; i++){
            saida += nome[i];
            setTimeout(() => {
                escreve.innerHTML = saida;
                pos++;
                escreveNome(pos);
            }, 1000);
        }
    }
}

(()=>{
    ecreveNome(0);
})();