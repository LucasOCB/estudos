const simbolos = document.getElementsByClassName("jdv-simbolo")
const validarSimbolos = document.getElementsByClassName("jdv-simbolo")
const mensagemVitoria = document.querySelector(".mensagem-vitoria")
const botaoReset = document.querySelector("#reiniciar")
const mensagemVitoriaQuem = document.querySelector("#quemGanho")
var visao = 0
var simbolo  = 0
function limparVisao(painelSobre) {
    painelSobre.classList.remove("visao0")
    painelSobre.classList.remove("visao1")
}
function validarVitoria() {
    function ciclo(simbolo){
        //Horizontal
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[1].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        if(
            simbolos[3].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[5].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        if(
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[7].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        //Vertical
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[3].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        if(
            simbolos[1].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[7].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        if(
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[5].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        //Diagonal
        if(
            simbolos[0].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[8].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }
        if(
            simbolos[2].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[4].classList.contains(`simbolo-${simbolo}`) == true && 
            simbolos[6].classList.contains(`simbolo-${simbolo}`) == true)
        {
            mensagemVitoria.classList.add("mensagem-vitoria-simbolo")
            if(simbolo == "1"){
                mensagemVitoriaQuem.innerText = `O ${mensagemVitoriaQuem.innerText}` 
            }else{
                mensagemVitoriaQuem.innerText = `X ${mensagemVitoriaQuem.innerText}` 
            }
            return
        }    
    }
    ciclo("1");
    ciclo("0");
}
function reset(){
    visao = 0
    simbolo = 0
    mensagemVitoria.classList.remove("mensagem-vitoria-simbolo")
    for(const limparSimbolos of simbolos ){
        limparSimbolos.classList.remove("simbolo-0")
        limparSimbolos.classList.remove("simbolo-1")
        limparSimbolos.classList.remove("visao0")
        limparSimbolos.classList.remove("visao1")
    }
    mensagemVitoriaQuem.innerText = "Venceu!"
}
for(const simboloHover of simbolos){
    simboloHover.addEventListener('mouseover', () => {
        if(simboloHover.classList.contains("simbolo-0") == true || simboloHover.classList.contains("simbolo-1") == true){
            return
        }else {
            simboloHover.classList.add(`visao${visao % 2}`)
        }
    })
    simboloHover.addEventListener('mouseout', () => {
        simboloHover.classList.remove(`visao${visao % 2}`)
    })
}
for(const simboloClick of simbolos){
    simboloClick.addEventListener('click', () => {
        limparVisao(simboloClick)
        if(simboloClick.classList.contains("simbolo-0") == true || simboloClick.classList.contains("simbolo-1") == true){
            return
        }else {
            simboloClick.classList.add(`simbolo-${simbolo % 2}`)
        }
        simboloClick.classList.add(`simbolo-${simbolo % 2}`)
        simbolo += 1
        visao += 1
        validarVitoria();
    })
}
botaoReset.addEventListener('click', () => {
    reset();
})


